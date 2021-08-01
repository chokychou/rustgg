import asyncio
import websockets
import json

class Command:
    """
    The Command class sends cmd to RCON.
    """
    def __init__(self, addr, pw, user):
        self._setAddr(addr)
        self._setPW(pw)
        self._setUser(str(user))
        self._setMessage()
        
    def _setAddr(self, addr=None):
        self.addr = addr
    
    def _setPW(self, pw=None):
        self.pw = pw
        
    def _setUser(self, user=None):
        self.user = user
        
    def _setMessage(self):
        self.msg = {
            'Message': 'o.usergroup add ' + self.user + ' vip', 
            'Type': 'Command'
        }
    
    @property    
    def send(self):
        async def hello():
            uri = "ws://" + self.addr + "/" + self.pw
            async with websockets.connect(uri) as websocket:
                await websocket.send(json.dumps(self.msg))
                greeting = await websocket.recv()
                print(json.loads(greeting))

        asyncio.run(hello())