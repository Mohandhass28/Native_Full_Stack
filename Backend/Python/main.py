from config import app
from modle import database


if __name__ == "__main__":  
    with app.app_context():
        app.run()
        database.db.create_all()