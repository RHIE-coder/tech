# Getting Started

 - install

```sh
pip install fastapi
pip install "uvicorn[standard]"
```

 - app.py

```python
from typing import Union

from fastapi import FastAPI

app = FastAPI()


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}
```

 - running

```sh
python -m uvicorn pythonfile:app --reload
```

 - request

> http://localhost:8000/items/1?q=123
> 
> {"item_id":1,"q":"123"}

 - swagger

> http://localhost:8000/docs