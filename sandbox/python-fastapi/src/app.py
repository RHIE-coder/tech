from typing import Optional, Union
from pydantic import BaseModel, PlainValidator
from fastapi import FastAPI, Request
from enum import Enum

app = FastAPI()

class Item(BaseModel):
    name:str
    price:float
    is_offer: Optional[bool]

class ModelName(str, Enum):
    alexnet = "alexnet"
    resnet = "resnet"
    lenet = "lenet"

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get("/err")
def error():
    raise PermissionError("not allowed")
    return "haha"

@app.get("/dataformat")
def dataformat():
    return dict(
        test=1234
    )

@app.get("/files/{file_path:path}")
async def read_file(file_path: str):
    return {"file_path": file_path}

@app.get("/items/format")
async def item_format()->Item:
    return Item(
        name="owen",
        price=1000.0,
        is_offer=False,
    )

@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[int, None] = None):
    return {"item_id": item_id, "q": q}

@app.get("/aimodel/{model_name}")
async def get_model(model_name:ModelName):
    return {"aimodelname":model_name}

# pydantic: 파라미터 에러처리
# pydantic: 모델 validator
# fastapi: recover, exception
# fastapi: swagger response model set