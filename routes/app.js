module.exports = function(express){
  var router = express.Router();

  //Route that shows all of the apps
  router.get('/apps', function(req,res){
    res.json([{
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
      "title": "Splash mountain",
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
    }]);
  })

  // Route that shows a specific app by id
  router.get('/apps/:id', function(req,res){
    if(req.params.id == 0){
      res.json({
        "id": "0",
        "title": "Shooterific",
        "description": "Shoot em up action filled thriller",
        "artAssets": [
          { "title": "Splash Screen", "srcLink": "http://i.imgur.com/5e5Ihb6.jpg" },
          { "title": "Cut Scene", "srcLink": "http://i.imgur.com/QQ3O6PO.jpg" }
        ],
        "releaseDate": "2016-06-15T22:29:20.000Z",
        "createdAt": "2016-05-15T22:29:20.000Z",
        "updatedAt": "2016-05-15T22:29:20.000Z"
      });
    }else {
      res.json({
        "id": "1",
        "title": "Splash Maze",
        "description": "Solve puzzles as you race against the tide",
        "artAssets": [
          { "title": "Splash Screen", "srcLink": "http://i.imgur.com/5e5Ihb6.jpg" },
          { "title": "Cut Scene", "srcLink": "http://i.imgur.com/QQ3O6PO.jpg" }
        ],
        "releaseDate": "2016-06-15T22:29:20.000Z",
        "createdAt": "2016-05-15T22:29:20.000Z",
        "updatedAt": "2016-05-15T22:29:20.000Z"
      });
    }

  })

  return router;
}
