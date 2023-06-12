import json

from flask import abort, jsonify, request, session
from flask_restful import Resource, reqparse
from sqlalchemy import or_
from app.models.user import User
from app.main.database import db



class Register(Resource):
    def get(self):
        return False
        

    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument('username', type=str, required=True)
        parser.add_argument('fullname', type=str, required=True)
        parser.add_argument('email', type=str, required=True)
        args = parser.parse_args()
        fullname = args.get("fullname")
        username = args.get("username")
        email = args.get("email")
        user = User.query.filter(or_(User.username == username, User.email == email)).first()
        if user:
            abort(403, f"username {username} or email {email} is being used before")
        userCreate = User(fullname,username,email)
        db.session.add(userCreate)
        userResult = db.session.commit()
        
        if userCreate:
            return jsonify(status = 'true', user = userCreate.serialize())
        else: 
            abort(500, f"Creating user {username} not successful")
            

       
        

