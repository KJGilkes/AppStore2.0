# App Store Static API

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

# Routes

#### Display all users info
| Method | URL | Output/Response |
|---|---|---|---|
| GET | /api/v1/users | [{"user": {"id": "2","name": "Gilkes"}}]|

This displays an array of all the users in our api

#### Display a specific users info
| Method | URL | Output/Response |
|---|---|---|---|
| GET | /api/v1/users/2 | {"id": "2","name": "Gilkes"}|

This displays a user with an id of 2 in our api

#### Display all apps info
```json
Method: GET
URL:/api/v1/apps
Response:
[{
  "id": "0",
  "title": "Shooterific",
  "description": "Shoot em up action filled thriller",
  "artAssets": [
    { "title": "Splash Screen", "srcLink": "http://i.imgur.com/5e5Ihb6.jpg" },
    { "title": "Cut Scene", "srcLink": "http://i.imgur.com/QQ3O6PO.jpg" }
  ],
  "releaseDate": "2016-06-15T22:29:20.000Z",
  "createdAt": "2016-05-15T22:29:20.000Z",
  "updatedAt": "2016-05-15T22:29:20.000Z",
  "user": {
    "id": "2",
    "name": "Gilkes"
  }
},
{
  "id": "1",
  "title": "Splash Maze",
  "description": "Solve puzzles as you race against the tide",
  "artAssets": [
    { "title": "Splash Screen", "srcLink": "http://i.imgur.com/5e5Ihb6.jpg" },
    { "title": "Cut Scene", "srcLink": "http://i.imgur.com/QQ3O6PO.jpg" }
  ],
  "releaseDate": "2016-06-15T22:29:20.000Z",
  "createdAt": "2016-05-15T22:29:20.000Z",
  "updatedAt": "2016-05-15T22:29:20.000Z",
  "user": {
    "id": "3",
    "name": "Khalil"
  }
}]
```

#### Display a specific apps info
```json
Method: GET
URL:/api/v1/apps/0
Response:
{
  "id": "0",
  "title": "Shooterific",
  "description": "Shoot em up action filled thriller",
  "artAssets": [
    { "title": "Splash Screen", "srcLink": "http://i.imgur.com/5e5Ihb6.jpg" },
    { "title": "Cut Scene", "srcLink": "http://i.imgur.com/QQ3O6PO.jpg" }
  ],
  "releaseDate": "2016-06-15T22:29:20.000Z",
  "createdAt": "2016-05-15T22:29:20.000Z",
  "updatedAt": "2016-05-15T22:29:20.000Z",
  "user": {
    "id": "2",
    "name": "Gilkes"
  }
}
```
