# Workgenius Candidate Project
Disclaimer: This project doesn't have any authentication method for security.

Side | Technologies 
--- | --- 
Frontend | ReactJS - Redux - Axios
Backend | Python - Flask
Database | MySQL

## Requirement
You should install and use these requirements before use this project.

Requirement | Version
--- | --- 
NodeJS | 16.20.0+
NPM | 8.19.4+
Python | 3.10+
MySQL | 5.5 or 5.6 or 5.7

## How to use?
You can follow these steps to start the application.

### Virtual environments
- in macOS/Linux:

```
$ pip install virtualenv
$ python3 -m venv venv
$ . venv/bin/activate
```
- in Windows:

```
$ pip install virtualenv
$ py -3 -m venv .venv
$ .venv\Scripts\activate
```

### Install all project dependencies using:

```
$ pip install -r requirements.txt
$ cd frontend/
$ npm install
```

### Edit your env.py

Open env.py and edit SQLALCHEMY_DATABASE_URI based on your mysql database information.

It should be like this example: `mysql://username:password@server/db`

Note: make sure your MySQL is running and works.

### Run the migrations

```
$ flask db upgrade head
```

### Run the Flask server

```
$ flask run --host=0.0.0.0
```

### Run the React.js application

Note: make sure you are in the frontend directory.
```
$ npm start
```

## Running ports and urls

By default, your backend server is running at 127.0.0.1:5000 and your frontend is running at 127.0.0.1:3000.

If you changed the server address you should change `let apiPrefix = "http://localhost:5000/api"` in the redux actions.

