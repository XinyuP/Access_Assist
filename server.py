from flask import Flask, request, jsonify
import time
import numpy as np
import processing_address
from geopy.geocoders import Nominatim

# create a Nominatim object
geolocator = Nominatim(user_agent="AccessAssist2")

app = Flask(__name__)

api_key = "AIzaSyAWcWHLVvoLzR40_G_IfOIENZpcPQNk7Tc"


@app.route('/address-user', methods=['POST'])
def handle_request():
    data = request.get_json()
    address = data['address']

    # Call your get_lat_lon function here
    coords = processing_address.get_lat_long(address, api_key)

    # Sleep for 1 second to prevent rate limiting
    time.sleep(1)

    return jsonify({
        'latitude': coords[0],
        'longitude': coords[1]
    })


if __name__ == '__main__':
    app.run()
