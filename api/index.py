import sys
import os

# Add the parent directory to sys.path to allow importing from the 'backend' folder
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from backend.main import app

# Vercel handles the application instance
