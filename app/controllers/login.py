import json

from flask import abort, jsonify, request, session
from flask_restful import Resource, reqparse
from app.models.user import User
from app.main.database import db



class Login(Resource):
    def get(self):
        return False
        

    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument('username', type=str, required=True)
        args = parser.parse_args()
        username = args.get("username")
            
        user = User.query.filter_by(username=username).first()
        if user:
            return jsonify(status = 'true', user = user.serialize())
        else: 
            abort(404, f"Account with username {username} not found")
            
        

