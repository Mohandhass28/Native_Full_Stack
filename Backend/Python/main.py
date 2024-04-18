from flask import Flask,jsonify
from flask_restful import Resource, Api
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
api = Api(app)
app.secret_key = "hello"
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///users.sqlite3"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db = SQLAlchemy(app)

class users(db.Model):
    _id = db.Column("id", db.Integer, primary_key=True)
    name = db.Column("name", db.String(100))
    email = db.Column("email", db.String(100))
    
    def __init__(self, name, email):
        self.name = name
        self.email = email
    
class Hellowrld(Resource):
    def get(self):
        return "Hello"

api.add_resource(Hellowrld, '/data')

if __name__ == "__main__":
    db.create_all()
    app.run(debug=True)
