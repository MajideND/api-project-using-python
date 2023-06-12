from flask import abort
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import Integer, String
from app.main.database import db


class User(db.Model):
    """
    This is a base user Model
    """
    __tablename__ = 'users'

    id = db.Column(Integer, primary_key=True)
    fullname = db.Column(String(100), nullable=False)
    username = db.Column(String(20), nullable=False, unique=True)
    email = db.Column(String(100), nullable=False, unique=True)

    def __init__(self, fullname, username, email):
        self.fullname = fullname
        self.username = username
        self.email = email
        
    def serialize(self):
        return {"id": self.id,
                "username": self.username,
                "fullname": self.fullname,
                "email": self.email}
    
