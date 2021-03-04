import json
from datetime import datetime
from gql import gql, Client
from gql.transport.aiohttp import AIOHTTPTransport


query = gql(
    """
    mutation CREATE_ATTEMPT(
        $confidence: Int
        $threshold: Int
        $scan_time: String
        $user_id: ID!
        $device_id: ID!
    ) {
        createAttempt(
            data: {
                confidence: $confidence
                threshold: $threshold
                scanTime: $scan_time
                user: { connect: { id: $user_id } }
                device: { connect: { id: $device_id } }
            }
        ) {
            id
        }
    }
"""
)


def archive_attempt(url, user_id, device_id, confidence, threshold):
    transport = AIOHTTPTransport(url=url)
    client = Client(transport=transport, fetch_schema_from_transport=True)
    scan_time = datetime.now().isoformat()
    params = {
        "confidence": confidence,
        "threshold": threshold,
        "scan_time": scan_time,
        "user_id": user_id,
        "device_id": device_id,
    }
    response = client.execute(query, variable_values=params)
    return response
