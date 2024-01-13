import asyncio

async def main():
    print('hello')
    await asyncio.sleep(4)
    print('world')

asyncio.run(main());