from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from typing import Dict
import pymongo
import json

secrets_path = "secrets.json" # Path to your secrets file

app = FastAPI()
origins = ["*"]  # Allow all origins

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api/leaderboard")
async def get_leaderboard() -> Dict:

    with open(secrets_path, "r") as secrets_file:
        secrets = json.load(secrets_file)

    mongodb_uri = secrets.get("MONGODB_URI")
    client = pymongo.MongoClient(mongodb_uri)
    db= client["scriveners"]
    collection = db["poems"]
    leaderboard_data = list(collection.find())

    return {"leaderboard": leaderboard_data}