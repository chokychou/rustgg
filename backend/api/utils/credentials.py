import os
from pathlib import Path
from dotenv import load_dotenv

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve(strict=True).parent.parent.parent
load_dotenv()

class Credentials:
    def __init__(self, server=None) -> None:
        if server=='rustyfire': self.RUSTYFIRE() 
        if server=='rustygo': self.RUSTYGO()
    
    def RUSTYFIRE(self) -> None:
        self.ADDRESS = os.getenv('RUSTYFIRE_ADDR')
        self.PASSWORD = os.getenv('RUSTYFIRE_PW')
        
    def RUSTYGO(self) -> None:
        self.ADDRESS = os.getenv('RUSTYGO_ADDR')
        self.PASSWORD = os.getenv('RUSTYGO_PW')
        
    def MORUST(self) -> None:
        self.ADDRESS = os.getenv('MORUST_ADDR')
        self.PASSWORD = os.getenv('MORUST_PW')