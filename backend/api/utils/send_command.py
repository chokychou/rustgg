from .credentials import Credentials
from .commands import Command
import asyncio

async def send_command(server=None, user=None) -> None:
    """
    Send command to the game server.
    """
    server_credential = Credentials(server)
    command = Command(
        addr = server_credential.ADDRESS,
        pw = server_credential.PASSWORD,
        user = user
    )
    command.send