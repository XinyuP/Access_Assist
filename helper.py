# get long/lat of an address
import json
import pandas as pd
import requests
api_key = "AIzaSyAWcWHLVvoLzR40_G_IfOIENZpcPQNk7Tc"


def get_lat_long(address):
    url = "https://maps.googleapis.com/maps/api/geocode/json?address={0}&key={1}".format(
        address, api_key)
    response = requests.get(url)
    if response.status_code == 200:
        data = response.json()
        if data["status"] == "OK":
            lat = data["results"][0]["geometry"]["location"]["lat"]
            lng = data["results"][0]["geometry"]["location"]["lng"]
            return lat, lng
        else:
            return None, None
    else:
        return None, None


# read in csv of local candidates and return json file of lat/long/title/type
