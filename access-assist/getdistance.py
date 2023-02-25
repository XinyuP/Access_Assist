import math

def getDistance(lat1, lon1, lat2, lon2):
    R = 6371
    lat_dist = deg2rad(lat2 - lat1)
    lon_dist = deg2rad(lon2 - lon1)
    
    a = math.sin(lat_dist/2) * math.sin(lat_dist/2) + \
        math.cos(deg2rad(lat1)) * math.cos(deg2rad(lat2)) * \
        math.sin(lon_dist/2) * math.sin(lon_dist/2)
        
    c = 2 * math.atan2(math.sqrt(a), math.sqrt(1-a))
    d = R * c
    km_to_m = d * 0.62137119 
    return km_to_m


def deg2rad(deg):
    return deg * (math.pi/180)