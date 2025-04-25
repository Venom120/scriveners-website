from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from typing import  Dict

app = FastAPI()

origins = [
    "http://localhost:8080",  # origin of the React app, adjust if needed
    "http://127.0.0.1:8080",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

leaderboard_data = [
    {"rank": 1, "username": "username1", "score": 100},
    {"rank": 2, "username": "username2", "score": 90},
    {"rank": 3, "username": "username3", "score": 80},
    {"rank": 4, "username": "username4", "score": 70},
    {"rank": 5, "username": "username5", "score": 60},
    {"rank": 6, "username": "username6", "score": 50},
    {"rank": 7, "username": "username7", "score": 40},
]


@app.get("/api/leaderboard")
async def get_leaderboard() -> Dict:
    return {"leaderboard": leaderboard_data}