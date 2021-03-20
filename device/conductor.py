import os
import random
from dotenv import load_dotenv
from archivist import archive_attempt
from analyst import authenticate

# Load the environment variables
load_dotenv()

# Create the attempt information packet
attempt = {
    "confidence": random.randint(60, 100),
    "threshold": int(os.getenv("AUTHENTICATION_THRESHOLD")),
    "url": os.getenv("BACKEND_URL"),
    "user_id": os.getenv("USER_ID"),
    "device_id": os.getenv("DEVICE_ID"),
}

# Archive it to the hosted database
archive_attempt(**attempt)