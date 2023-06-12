from flask_restful import Api
from app.controllers.picture import PictureController
from app.controllers.register import Register
from app.controllers.user import UserData
from app.controllers.login import Login

api = Api(
    catch_all_404s=True,
    prefix='/api'
)

api.add_resource(Login, '/login')
api.add_resource(Register, '/register')
api.add_resource(PictureController, '/picture')

