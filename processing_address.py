from math import sin, cos, sqrt, atan2, radians
import json
import pandas as pd
# get long/lat of an address
import requests
api_key = "AIzaSyAWcWHLVvoLzR40_G_IfOIENZpcPQNk7Tc"


def get_lat_long(address, api_key=api_key):
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


# geocode addresses from csv
df = pd.read_csv("data/index.csv")
df["lat"], df["lon"] = zip(*df["address"].apply(lambda x: get_lat_long(x)))
df.to_csv("data/index_geocode.csv")

# read in geocoded csv of local candidates and return json file of lat/long/title/type

df = pd.read_csv("data/index_geocode.csv")


def distance(lat1, lon1, lat2, lon2):
    # approximate radius of earth in mi
    R = 3963
    lat1 = radians(lat1)
    lon1 = radians(lon1)
    lat2 = radians(lat2)
    lon2 = radians(lon2)

    dlon = lon2 - lon1
    dlat = lat2 - lat1
    a = sin(dlat / 2)**2 + cos(lat1) * cos(lat2) * sin(dlon / 2)**2
    c = 2 * atan2(sqrt(a), sqrt(1 - a))
    distance = R * c
    return distance


def get_json_results(addr, df=df, max_distance=5):
    lat, lng = get_lat_long(addr)
    temp_df = df.copy()
    temp_df["distance"] = temp_df.apply(
        lambda x: distance(lat, lng, x["lat"], x["lon"]), axis=1)
    records = temp_df[temp_df["distance"] < max_distance]
    records.to_json("data/results.json", orient="records")
    return records.to_json(orient="records")
