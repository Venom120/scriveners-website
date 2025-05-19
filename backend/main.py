from fastapi import FastAPI, Depends, HTTPException, Request, status, Response
from fastapi.middleware.cors import CORSMiddleware
from typing import Dict, List, Optional
import pymongo
import json
from pydantic import BaseModel
import secrets
from enum import Enum
import gspread
from google.oauth2.service_account import Credentials

# Secret token for admin authentication
secrets_path = "secrets.json" # Path to your secrets file

ADMIN_PASSWORD = "1234"

with open(secrets_path, "r") as secrets_file:
        secret = json.load(secrets_file)
        ADMIN_PASSWORD = secret["ADMIN_PASS"]


app = FastAPI()
origins = ["*"]  # Allow all origins

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load MongoDB URI from secrets file
db = None
def load_mongodb_uri():
    with open(secrets_path, "r") as secrets_file:
        secrets = json.load(secrets_file)

    mongodb_uri = secrets.get("SCRIVENERS_URI")
    client = pymongo.MongoClient(mongodb_uri)
    global db
    db = client["scriveners"]

load_mongodb_uri()

# Session storage (in-memory)
active_sessions = {}

class LoginRequest(BaseModel):
    password: str

class UpdatePointsRequest(BaseModel):
    username: str
    points: int

class LitFestFormRequest(BaseModel):
    name: str
    email: str
    phone: str
    semester: str
    branch: str
    eventsToAttend: str
    eventsToParticipate: str

# Helper function to verify admin token
def verify_admin_token(token: str) -> bool:
    return token in active_sessions

# Return active session token from cookie
def get_admin_token(request: Request) -> Optional[str]:
    return request.cookies.get("admin_token")

@app.get("/api/poem")
async def get_poem() -> Dict:
    collection = db["poem_points"]
    return {"poem": list(collection.find({}, {"_id": 0}))}  # Exclude the MongoDB ObjectId from the response

@app.post("/api/login")
async def login(login_data: LoginRequest, response: Response):
    if login_data.password == ADMIN_PASSWORD:
        # Generate session token
        session_token = secrets.token_hex(16)
        active_sessions[session_token] = True
        
        # Set cookie with session token
        response.set_cookie(
            key="admin_token", 
            value=session_token, 
            httponly=True, 
            samesite="strict",
            max_age=3600,  # 1 hour
        )
        
        return {"success": True, "message": "Login successful"}
    else:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED, 
            detail="Invalid credentials"
        )

@app.get("/api/logout")
async def logout(response: Response, token: str = Depends(get_admin_token)):
    if token and token in active_sessions:
        # Remove session
        active_sessions.pop(token, None)
    
    # Clear cookie
    response.delete_cookie(key="admin_token")
    return {"success": True, "message": "Logged out successfully"}

@app.get("/api/check-auth")
async def check_auth(token: str = Depends(get_admin_token)):
    if token and token in active_sessions:
        return {"authenticated": True}
    return {"authenticated": False}

@app.post("/api/update-points")
async def update_points(
    data: UpdatePointsRequest, 
    request: Request,
    token: str = Depends(get_admin_token)
):
    # Verify admin is logged in
    if not token or token not in active_sessions:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Admin authentication required"
        )
    
    try:
        collection = db["poem_points"]
        result = collection.update_one(
            {"username": data.username},
            {"$inc": {"score": data.points}}
        )
        
        if result.matched_count == 0:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail=f"User {data.username} not found"
            )
        
        return {"success": True, "message": f"Points updated successfully for {data.username}"}
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Error updating points: {str(e)}"
        )

@app.post("/api/add-user")
async def add_user(
    data: UpdatePointsRequest,
    request: Request,
    token: str = Depends(get_admin_token)
):
    # Verify admin is logged in
    if not token or token not in active_sessions:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Admin authentication required"
        )
    
    try:
        collection = db["poem_points"]
        # Check if user already exists
        existing_user = collection.find_one({"username": data.username})
        if existing_user:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail=f"User {data.username} already exists"
            )
        
        # Add new user
        new_user = {
            "username": data.username,
            "score": data.points,
            "rank": 0  # Rank will be calculated on frontend
        }
        collection.insert_one(new_user)
        
        return {"success": True, "message": f"User {data.username} added successfully"}
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Error adding user: {str(e)}"
        )

class Event(str, Enum):
    DEBATE = "Debate"
    TREASURE_HUNT = "Treasure Hunt"
    SPELL_BEE = "Spell Bee"
    OPEN_MIC = "Open Mic"

MAIN_SHEET_NAME = "main"
DEBATE_SHEET_NAME = "debate"
TREASURE_HUNT_SHEET_NAME = "treasurehunt"
SPELL_BEE_SHEET_NAME = "spellbee"
OPEN_MIC_SHEET_NAME = "openmic"

@app.post("/api/litfest/submit")
async def submit_litfest_form(form_data: LitFestFormRequest):
    try:
        gc = gspread.service_account(filename="LitFestSubmition.json")
        sh = gc.open_by_key("1zzbf1kc25vC-nbO6kcehu9rR1lXoH96ozOlioCrbuEA")

        # Access sheets
        main_sheet = sh.worksheet(MAIN_SHEET_NAME)
        debate_sheet = sh.worksheet(DEBATE_SHEET_NAME)
        treasure_hunt_sheet = sh.worksheet(TREASURE_HUNT_SHEET_NAME)
        spell_bee_sheet = sh.worksheet(SPELL_BEE_SHEET_NAME)
        open_mic_sheet = sh.worksheet(OPEN_MIC_SHEET_NAME)

        # Prepare data
        data = [
            form_data.name,
            form_data.email,
            form_data.phone,
            form_data.semester,
            form_data.branch,
            ";".join(form_data.eventsToAttend.split(",")),
            ";".join(form_data.eventsToParticipate.split(",")),
        ]

        # Determine event categories
        events_participating = form_data.eventsToParticipate.split(",")
        event_categories = []
        if Event.DEBATE.value in events_participating:
            event_categories.append(Event.DEBATE)
        if Event.TREASURE_HUNT.value in events_participating:
            event_categories.append(Event.TREASURE_HUNT)
        if Event.SPELL_BEE.value in events_participating:
            event_categories.append(Event.SPELL_BEE)
        if Event.OPEN_MIC.value in events_participating:
            event_categories.append(Event.OPEN_MIC)

        # Get all records from the main sheet
        main_records = main_sheet.get_all_records()

        # Check if the email already exists in the main sheet
        existing_row_index = -1
        for index, row in enumerate(main_records):
            if row.get('email') == form_data.email:
                existing_row_index = index + 2  # +2 because of header row and 0-based indexing
                break

        if existing_row_index != -1:
            # Update existing row in the main sheet
            main_sheet.update(f'A{existing_row_index}:H{existing_row_index}', [data])

            # Delete from other sheets
            for event in Event:
                if event.value in [e.value for e in event_categories]:
                    continue  # Don't delete from sheets the user is still participating in
                try:
                    sheet_name = event.value.replace(" ", "").lower()
                    sheet = sh.worksheet(sheet_name)
                    records = sheet.get_all_records()
                    for index, row in enumerate(records):
                        if row.get('email') == form_data.email:
                            sheet.delete_rows(index + 2)  # +2 for header and 0-based indexing
                            break
                except gspread.exceptions.WorksheetNotFound:
                    pass  # Sheet doesn't exist, ignore
        else:
            # Append data to the main sheet
            main_sheet.append_row([
                form_data.name,
                form_data.email,
                form_data.phone,
                form_data.semester,
                form_data.branch,
                ";".join(form_data.eventsToAttend.split(",")),
                ";".join(form_data.eventsToParticipate.split(",")),
            ])

        # Append to event-specific sheets
        for event in event_categories:
            sheet_name = event.value.replace(" ", "").lower()
            print(sheet_name, event.value)
            if sheet_name == DEBATE_SHEET_NAME:
                sheet = debate_sheet
            elif sheet_name == TREASURE_HUNT_SHEET_NAME:
                sheet = treasure_hunt_sheet
            elif sheet_name == SPELL_BEE_SHEET_NAME:
                sheet = spell_bee_sheet
            elif sheet_name == OPEN_MIC_SHEET_NAME:
                sheet = open_mic_sheet
            print(f"Appending to sheet: {sheet_name}")
            sheet.append_row([
                form_data.name,
                form_data.email,
                form_data.phone,
                form_data.semester,
                form_data.branch,
                ";".join(form_data.eventsToParticipate.split(",")),
            ])

        return {"message": "Form submitted successfully"}

    except Exception as e:
        print(f"Error submitting form: {e}")
        raise HTTPException(status_code=500, detail=f"Failed to submit form: {str(e)}")
