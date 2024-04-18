from flask_sqlalchemy import SQLAlchemy
from main import app

db = SQLAlchemy(app)

class User(db.Model):
    _id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String(20))
    email = db.Column(db.String(20))

    def __init__(self, name, email):
        self.name = name
        self.email = email
    
