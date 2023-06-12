import json

from flask import abort, jsonify, session
from flask_restful import Resource
from app.models.user import User
from app.main.database import db



class UserData(Resource):
    def get(self, username):
        # return json.dumps({'name': 'alice', 'email': 'alice@outlook.com'})
        user = User.query.filter_by(username=username).first()
        if user is not None:
            return jsonify(status = 'true', user = user.serialize())
        else:
            abort(404, f"Person with username {username} not found")
        

    def post(self, username, email, fullname):
        try:
            user = User(fullname, username, email)
            db.session.add(user)
            db.session.commit()
        except:
            abort(500, f"Internal server error. Create {username} not successfull.")
        pass

