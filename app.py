from flask import Flask
from flask import request
import helper.py
app = Flask(__name__)


@app.route("/api/address", methods=['POST'])
def get_dates():
    input_address = request.form.get('input-address')
    # how do i implement this method


@app.route('/')
def index():
    return "<h1 > Home Page </hi>"


if __name__ == '__main__':
    app.run(debug=True)
