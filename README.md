# App Store Dynamic API

### Installation
To install api's dependencies run the command:
```
 npm install
```

### Start server
To start api's server run the command:
```
 npm start
```

# Database configuration
This api uses MySql

To interact with the database your going to need a .env file filled with environmental variables as they pretain to your local machines database.
```
DB_NAME=
DB_USER=
DB_PASS=
DB_HOST=
DB_SCHEMA=
DB_PORT=

```

# User Routes

#### To create a user
| Method | URL | Output/Response |
|---|---|---|---|
| POST | /api/v1/users | {"name": "Gilkes","age": 20,"hobby": "Skating"}|

This creates a user in the api

#### To display all users info
| Method | URL | Output/Response |
|---|---|---|---|
| GET | /api/v1/users | {"id": "2","name": "Gilkes","age": 20,"hobby": "Skating"}, {"id": "3","name": "Khalil","age": 30,"hobby": "Coding"}|


This displays all of the users in the api

#### To display a specific users info
| Method | URL | Output/Response |
|---|---|---|---|
| GET | /api/v1/users/2 | {"id": "2","name": "Gilkes","age": 20,"hobby": "Skating"}|

This displays a user with an id of 2 in the api

#### To update a specific users info
| Method | URL | Output/Response |
|---|---|---|---|
| Post | /api/v1/users/2 | {"name": "Gileks","age": 22,"hobby": "Rollerskating"}|

This updates a user with an id of 2 in the api

#### To update a specific users apps
| Method | URL | Output/Response |
|---|---|---|---|
| Post | /api/v1/users/2/apps | {"userID": "2", "title": "Splash Maze", "description": "Solve puzzles as you race against the tide."}|

This updates a user with an id of 2 in the api

#### To delete a specific users info
| Method | URL | Output/Response |
|---|---|---|---|
| DELETE | /api/v1/users/2 | 1 |

This deletes a user with an id of 2 in the api

# App Routes

#### To create an app
| Method | URL | Output/Response |
|---|---|---|---|
| POST | /api/v1/apps | {"userID": "2", "title": "Splash Maze", "description": "Solve puzzles as you race against the tide."}|

This creates an app in the api

#### To display all apps info
| Method | URL | Output/Response |
|---|---|---|---|
| GET | /api/v1/apps | {"userID": "2", "title": "Splash Maze", "description": "Solve puzzles as you race against the tide."}, {"userID": "3", "title": "Slime Factory", "description": "See if you can create the best slime in the Slime Factory."}|

This creates a user in the api

#### To display a specific apps info
| Method | URL | Output/Response |
|---|---|---|---|
| GET | /api/v1/apps/1 | {"id": 1, "userID": "2", "title": "Splash Maze", "description": "Solve puzzles as you race against the tide."}|

This creates a user in the api

#### To update an app
| Method | URL | Output/Response |
|---|---|---|---|
| POST | /api/v1/apps/1 | {"userID": "2", "title": "Splash Puzzles", "description": "Solve puzzles as you splash against the waves."}|

This creates a user in the api

#### To delete an app
| Method | URL | Output/Response |
|---|---|---|---|
| DELETE | /api/v1/apps/1 | 1 |

This creates a user in the api
