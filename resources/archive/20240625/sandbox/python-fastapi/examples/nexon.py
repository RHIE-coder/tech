from fastapi import FastAPI
import requests
from dotenv import load_dotenv
import os

load_dotenv()
API_KEY = os.environ.get('NEXON_API_KEY')
print(API_KEY)


app = FastAPI()


@app.get("/books/{book_id}")
async def read_books(book_id:int):
    return dict(
        book_id=book_id
    )

@app.get("/maple")
async def maple_api_test():
    response = requests.get(
        "https://open.api.nexon.com/maplestory/v1/id?character_name="+"순결한용사",
        headers={
            "x-nxopen-api-key":API_KEY
        },

    )
    return response.json()

@app.get("/maple/personal")
async def maple_api_test():
    response = requests.get(
        "https://open.api.nexon.com/maplestory/v1/character/basic?ocid="+"a8d09030dd1cdc36965bd30c02d730f3"+"&date=2023-12-21",
        headers={
            "x-nxopen-api-key":API_KEY
        },

    )
    return response.json()