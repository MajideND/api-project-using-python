import logging
import os
from flask import Flask
from app import main
from app.main.api import api
from app.main.database import db, migration
from app.main.logging import LOGGING_CONFIG
import env

# Flask App Initialization
app = Flask(__name__)
app.config.from_object(main.settings[env.APPLICATION_ENV])
app.config["SQLALCHEMY_DATABASE_URI"] = env.SQLALCHEMY_DATABASE_URI
app.config["SQLALCHEMY_ECHO"] = True
app.config["SQLALCHEMY_RECORD_QUERIES"] = True


# Logs Initialization
console = logging.getLogger('console')

# Database ORM Initialization
from app import models
db.init_app(app)

# Database Migrations Initialization
migration.init_app(app, db)

# Flask API Initialization
api.init_app(app)
