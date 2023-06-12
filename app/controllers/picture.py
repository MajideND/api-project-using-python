import os
from flask import abort, jsonify
from flask_restful import Resource, reqparse
from werkzeug.utils import secure_filename
from werkzeug.datastructures import  FileStorage
from app.main.database import db
from app.models.picture import Picture
from app.models.user import User

class PictureController(Resource):
    
    def uploadDirForUser(username):
        uploadDir = os.path.join(os.getcwd(),'frontend', 'public','upload')
        userUploadDir = os.path.join(uploadDir ,username)
        if not os.path.exists(userUploadDir):
            os.makedirs(os.path.join(userUploadDir))
        return userUploadDir
    
    
    def savePictureData(fileName, userId):
        try:
            pictureSave = Picture(fileName,userId)
            db.session.add(pictureSave)
            db.session.commit()
            if pictureSave:
                return jsonify(status = 'true', picture = pictureSave.serialize())
            else:
                abort(500, f"Inserting picture data to DB was not successful.")
        except :
            abort(500, f"Uploading picture was not successful.")
            
    def get(self):
        parse = reqparse.RequestParser()
        parse.add_argument('user_id', type=str,location='args', required=True)
        parse.add_argument('page', type=int, location='args', required=True)
        args = parse.parse_args()
        user_id = args['user_id']
        page = args['page']
        pictures = Picture.query.filter_by(user_id = user_id).paginate(page = page, per_page=8)
        
        if pictures is not None:
            return jsonify(status = 'true', pictures = [i.serialize() for i in pictures.items], total = pictures.total)
        else:
            abort(404, f"Can not find any picture for you!")
        

    def post(self):

        parse = reqparse.RequestParser()
        parse.add_argument('picture', type=FileStorage, location='files')
        parse.add_argument('username', type=str, location='form')
        args = parse.parse_args()
        pictureFile = args['picture']
        username = args['username']
        
        fileName = secure_filename(pictureFile.filename)
        userUploadDir = self.uploadDirForUser(username)
            
        pictureFile.save(os.path.join(userUploadDir, fileName))
        user = User.query.filter_by(username=username).first()
        if user is None or user is False:
            abort(404, f"Account with username {username} not found")
        userData = user.serialize()
        
        return self.savePictureData(fileName,user.id)
        

 


