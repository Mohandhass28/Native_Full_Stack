from modle import database
from flask import Flask
from flask_restful import Api
from Routes import path

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///db.sqlite3'

api = Api(app)
api.add_resource(path.HH, "/data")

if __name__ == "__main__":  
    with app.app_context():
        app.run()
        database.db.create_all()