# SAFETYAPP
SAFETY APP DOCUMENTATION

## AIM
To create a full stack mobile Health and Safety App 

## REQUIREMENTS
To complete this project, the following need to have been accomplished
- Create a backend/server system which exposes API endpoint to interface with.
- Create a mobile/client side interface for users to interact with the system

## TECHNOLOGIES
### Backend
- NodeJS
- Sequelize
- Postgres
- Express
### Client Side
- React Native
- Redux
- NativeBase
- Testing
- Selenium
- Mocha or Jest

Travis for CI and Swagger for Documentation

Task Runner: 

## ENDPOINTS
### USERS
EndPoint                      |  Functionality
------------------------------|------------------------
POST /users/login             | Logs a user in.
POST /users/logout            | Logs a user out.
PUT /users/<id>               | Update user attributes.
POST /incidence/              | Creates a new incidence.
PUT /incidence/<id>           | Appends a new instance of incidence.
GET /incidence/<id>           | Fetches an instance of an incidence
GET /users/<id>/incidence     | Find all incidence belonging to the user.
GET /search/incidence/?q={title}  | Search for an incidence
GET /content/                 | Fetches all content available to user
GET /content/video            | Fetches all video available to user
GET /content/audio            | Fetches all audio available to user
GET /content/text             | Fetches all text available to user
GET /content/<id>             | Fetches a particular content
GET /search/content/?q={title}| Search for a content

### ADMIN/SUPER-ADMIN
EndPoint                      | Functionality
------------------------------|------------------------
POST /users/                  | Creates a new user.
GET /users/                   | Fetch all users
POST /admin/                  | Creates a new admin
POST /role/                   | Creates a new role
PUT /role/                    | Updates an existing role
DELETE /role/                 | Deletes an existing role
POST /content/                | Creates a new content
PUT /content/                 | Updates an existing content
DELETE /content/              | Deletes and existing content

