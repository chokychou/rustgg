import asyncio
import websockets
import json

class Command:
    """
    The Command class sends cmd to RCON.
    """
    def __init__(self):
        self._setAddr
        self._setPW
        self._setMessage
        
    def _setAddr(self,addr=None):
        self.addr = '103.53.126.238:28016'
    
    def _setPW(self,pw=None):
        self.pw = ''

    def _setMessage(self):
        self.msg = {
            'Message': 'o.usergroup remove 76561198126894618 raideasy', 
            'Type': 'Command'
        }
        
    def send(self):
        async def hello():
            uri = "ws://" + self.addr + "/" + self.pw
            async with websockets.connect(uri) as websocket:
                print(type(websocket))
                await websocket.send(json.dumps(self.msg))
                greeting = await websocket.recv()
                print(json.loads(greeting))

        asyncio.get_event_loop().run_until_complete(hello())