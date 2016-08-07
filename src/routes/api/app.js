const App = require('../../models/AppModel');

module.exports = function(express){
  var router = express.Router();

  //Route that shows all of the Apps
  router.get('/apps', function(req,res){
    App.all( (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    })
  });

  //Route that creates an App
  router.post('/apps', (req,res) => {
      App.add(req.body, (err) => {
        res.status(500).json(err);
      }, (data) => {
        res.status(200).json(data);
      })
  });

  //Route that shows a specific App
  router.get('/apps/:id', function(req,res){
    req.body.id = req.params.id;
    App.one(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    })
  });

  //Route that updates a specific App
  router.post('/apps/:id', function(req,res){
    req.body.id = req.params.id;
    App.update(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });

  //Route that deletes a specific App
  router.delete('/apps/:id', function(req,res){
    req.body.id = req.params.id;
    App.remove(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    })
  });

  return router;
}
