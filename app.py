from flask import Flask
from flask import request
from helper import *

app = Flask(__name__)


@app.route("/api/address", methods=['POST'])
def get_dates():
    input_address = request.form.get('input-address')
    lat, lng = get_lat_long(input_address)
    # how do i implement this method


@app.route('/')
def index():
    return "<h1 > Home Page </hi>"


if __name__ == '__main__':
    app.run(debug=True)
