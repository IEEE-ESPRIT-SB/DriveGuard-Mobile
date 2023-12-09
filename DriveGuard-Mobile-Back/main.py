from flask import Flask
from flask_pymongo import PyMongo

app = Flask(__name__)
mongo_client = PyMongo(app,
                       uri="mongodb+srv://HabibBibani:y10L7Kpw9U5iFP5P@ieee-esprit-sb.vnkbbab.mongodb.net/IEEE-ESPRIT-SB")

@app.route('/')
def index():
    return 'Hello World'


app.config['MongoURI'] = 'mongodb://localhost:27017/IEEE-ESPRIT-SB'
app.config['MONGO_URI'] = 'mongodb+srv://HabibBibani:y10L7Kpw9U5iFP5P@ieee-esprit-sb.vnkbbab.mongodb.net/IEEE-ESPRIT-SB',
app.config['MONGO_DBNAME'] = 'IEEE-ESPRIT-SB'
app.config['MONGO_USERNAME'] = 'HabibBibani'
app.config['MONGO_PASSWORD'] = 'y10L7Kpw9U5iFP5P'
app.config['MONGO_AUTH_SOURCE'] = 'admin'
app.config['MONGO_PORT'] = 27017
app.config['MONGO_CONNECT'] = True

mongo = PyMongo(app)

if __name__ == '__main__':
    app.run(debug=True)

# OverflowError: MongoDB can only handle up to 8-byte ints