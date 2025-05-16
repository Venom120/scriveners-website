
from fastapi import FastAPI, Depends, HTTPException, Request, status, Response
from fastapi.middleware.cors import CORSMiddleware
from typing import Dict, List, Optional
import pymongo
import json
from pydantic import BaseModel
import secrets

# Secret token for admin authentication
secrets_path = "secrets.json" # Path to your secrets file

ADMIN_PASSWORD = "1234"

with open(secrets_path, "r") as secrets_file:
        secrets = json.load(secrets_file)
        ADMIN_PASSWORD = secrets["ADMIN_PASS"]


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

# Helper function to verify admin token
def verify_admin_token(token: str) -> bool:
    return token in active_sessions

# Return active session token from cookie
def get_admin_token(request: Request) -> Optional[str]:
    return request.cookies.get("admin_token")

@app.get("/api/poem")
async def get_poem() -> Dict:
    collection = db["poems"]
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
        collection = db["poems"]
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
        collection = db["poems"]
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
