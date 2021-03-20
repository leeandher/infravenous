import json
import os
import random
from datetime import datetime
from dotenv import load_dotenv
from archivist import archive_attempt
from analyst import authenticate

# Load the environment variables
print("Loading secure variables")
load_dotenv()

# Perform the authentication attempt
start_time = datetime.timestamp(datetime.now())
result = authenticate()
end_time = datetime.timestamp(datetime.now())
print("Scan Time: " + str(round(end_time - start_time, 3)) + "ms")
user_guess = result[0]
confidence = result[1]
print("Attempt performed: " + str(result))


if (user_guess != os.getenv("DEFAULT_USER_NODE")):
    confiendce = -1

# Create the attempt information packet
attempt = {
    "confidence": int(confidence),
    "threshold": int(os.getenv("AUTHENTICATION_THRESHOLD")),
    "user_id": os.getenv("USER_ID"),
    "device_id": os.getenv("DEVICE_ID"),
}
print("Info Packet: ")
print(json.dumps(attempt, indent=2, sort_keys=True))

# Archive it to the hosted database
start_time = datetime.timestamp(datetime.now())
archive_attempt(**attempt)
print("Authentication attempt saved.")
end_time = datetime.timestamp(datetime.now())
print("Network Latency: " + str(round(end_time - start_time, 3)) + "ms")
