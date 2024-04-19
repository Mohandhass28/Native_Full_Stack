from flask_restful import Resource

class HH(Resource):
    def get(self):
        return "Hello"
    
