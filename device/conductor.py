import os
import random
from dotenv import load_dotenv
from archivist import archive_attempt

# from analyst import authenticate
from datetime import datetime

# Load the environment variables
print("Loading secure variables")
load_dotenv()

# Perform the authentication attempt
# result = authenticate()
# confidence = result.confidence;

# Create the attempt information packet
attempt = {
    "confidence": random.randint(60, 100),
    # "confidence": int(confidence),
    "threshold": int(os.getenv("AUTHENTICATION_THRESHOLD")),
    "url": os.getenv("BACKEND_URL"),
    "user_id": os.getenv("USER_ID"),
    "device_id": os.getenv("DEVICE_ID"),
}

# Archive it to the hosted database
start_time = datetime.timestamp(datetime.now())
archive_attempt(**attempt)
print("Authentication attempt saved.")
end_time = datetime.timestamp(datetime.now())
print("Network Latency: " + str(round(end_time - start_time, 3)) + "ms")
