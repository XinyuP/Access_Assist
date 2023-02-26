from flask import Flask, request, jsonify
import time
import numpy as np
import processing_address
from geopy.geocoders import Nominatim
from flask_cors import CORS, cross_origin

# create a Nominatim object
geolocator = Nominatim(user_agent="AccessAssist2")

app = Flask(__name__)
cors = CORS(app)
# cors = CORS(app, resource={
#     r"/*": {
#         "origins": "*"
#     }
# })

app.config['CORS_HEADERS'] = 'Content-Type'

api_key = "AIzaSyAWcWHLVvoLzR40_G_IfOIENZpcPQNk7Tc"


@app.route('/api/address', methods=['POST'])
def handle_request():
    data = request.get_json()
    address = data['address']

    # Call your get_lat_lon function here
    coords = processing_address.get_lat_long(address, api_key)

    # Sleep for 1 second to prevent rate limiting
    time.sleep(1)

    programs = processing_address.get_json_results(address)

    return jsonify({
        'latitude': coords[0],
        'longitude': coords[1],
        'programs': programs
    })


if __name__ == '__main__':
    app.run(debug=True)
