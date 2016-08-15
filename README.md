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

# Usage
This application uses a debugging to to display information about its inner workings.

To run the application in debug mode you will need to run:
```
DEBUG=true npm start
```

## Debugging
To use this debug tool in the application you must put this line at the top of the file if it is not already there.
```
const utility = require(/Path to utility file);
```
After the tool has been included you can then console log any information using this line of code.
```
utility.debug('Message to be displayed.', Status Code);
```

## Sample
```
utility.debug('App route has been hit.', 200);
```
### Response
```
App route has been hit. 200
===========================
```

# Unit testing
To run the unit tests inside of the test folder run the command:
```
mocha
```
This command looks through all files in the test folder and runs each specific test laid out inside.

To run the unit tests inside of the test folder in debug mode run the command:
```
DEBUG=true mocha
```
This command does everything that the first command does but also logs out information about each test.

## Istanbul
This application makes use of istanbul to generate code coverage reports displaying how much of your application is covered by unit tests.

To run istanbul use the command:
```
istanbul cover _mocha
```

# User Routes

#### To create a user
| Method | URL | Output/Response |
|---|---|---|---|
| POST | /api/v1/users | {"name": "Gilkes", "age": 20, "hobby": "Skating"}|

This creates a user in the api

#### To display all users info
| Method | URL | Output/Response |
|---|---|---|---|
| GET | /api/v1/users | {"id": "2", "name": "Gilkes", "age": 20, "hobby": "Skating"}, {"id": "3", "name": "Khalil", "age": 30, "hobby": "Coding"}|


This displays all of the users in the api

#### To display a specific users info
| Method | URL | Output/Response |
|---|---|---|---|
| GET | /api/v1/users/2 | {"id": "2", "name": "Gilkes", "age": 20, "hobby": "Skating"}|

This displays a user with an id of 2 in the api

#### To update a specific users info
| Method | URL | Output/Response |
|---|---|---|---|
| Post | /api/v1/users/2 | {"name": "Gileks", "age": 22, "hobby": "Rollerskating"}|

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
