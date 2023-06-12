from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import DateTime, Integer, String, func
from app.main.database import db

class Picture(db.Model):
    """
    This is a base user Model
    """
    __tablename__ = 'pictures'

    id = db.Column(Integer, primary_key=True)
    url = db.Column(String(255), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    uploaded_at = db.Column(DateTime(timezone=True), server_default=func.now())
    
    
    def __init__(self, url, user_id, uploaded_at = None):
        self.url = url
        self.user_id = user_id
        self.uploaded_at = uploaded_at

    def __repr__(self):
        return "<Picture(url='%s', user_id='%s')>" % (self.url, self.user_id)
    
    def serialize(self):
        return {"id": self.id,
            "url": self.url,
            "user_id": self.user_id,
            "uploaded_at": self.uploaded_at}
    
