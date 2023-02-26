from flask import Flask, render_template, request
import pandas as pd

app = Flask(__name__)

df = pd.read_csv("../data/index_geocode.csv")

locals = list(zip(list(df["lat"]), list(df["lon"]), list(df["program_name"])))

valid_locals = locals[:2]



@app.route("/")
def hello_world():
    
    return render_template("index.html", valid_locals = valid_locals, CENTER_LAT = 40.3597232, list_small = [1,2,3])




if __name__ == '__main__':
    app.run(host = '0.0.0.0', debug = True)