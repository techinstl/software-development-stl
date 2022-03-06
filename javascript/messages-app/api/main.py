from typing import Optional
from fastapi import FastAPI
from fastapi.responses import HTMLResponse
from fastapi.middleware.cors import CORSMiddleware
import mysql.connector


from pydantic import BaseModel


class Chat(BaseModel):
    id: Optional[int]
    user_name: str
    content: str


app = FastAPI()

origins = [
    "*"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


db_url = "slmcs-dev.cxbfrmb8cnzm.us-east-2.rds.amazonaws.com"
db = mysql.connector.connect(host=db_url, user="mark", password="123456", database="messages")


@app.get("/", response_class=HTMLResponse)
async def root():
    return "<h1>Server Running...</h1>"
    

@app.get("/messages")
async def get_messages():
    cursor = db.cursor()
    cursor.execute("SELECT id, user_name, content FROM chats")

    results = list()
    for (id, user_name, content) in cursor:
        results.append({
            "id": id,
            "user_name": user_name,
            "content": content
        })
    cursor.close()
    return results

@app.get("/messages/{username}")
async def get_messages_from_user(username):
    cursor = db.cursor()
    cursor.execute(f"SELECT id, user_name, content FROM chats WHERE user_name = '{username}'")
    results = list()
    for (id, user_name, content) in cursor:
        results.append({
            "id": id,
            "user_name": user_name,
            "content": content
        })
    cursor.close()
    print(results)
    return results


@app.post("/messages/add")
async def add_messages(chat: Chat):
    cursor = db.cursor()
    sql = f"INSERT INTO chats (user_name, content) values ('{chat.user_name}', '{chat.content}')"
    print(sql)
    cursor.execute(sql)
    db.commit()
    cursor.close()
    return {"status": 'success'}

    