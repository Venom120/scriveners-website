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
# Load MongoDB URI from secrets file
db = None
def load_mongodb_uri():
    with open(secrets_path, "r") as secrets_file:
        secrets = json.load(secrets_file)

    mongodb_uri = secrets.get("MONGODB_URI")
    client = pymongo.MongoClient(mongodb_uri)
    global db
    db= client["scriveners"]


load_mongodb_uri()
@app.get("/api/poem")
async def get_poem() -> Dict:
    collection = db["poems"]
    return {"poem": list(collection.find())}