const User = require('../../models/UserModel');

module.exports = function(express){
  var router = express.Router();

  //Route that shows all of the Users
  router.get('/users', function(req,res){
    User.all( (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    })
  });

  //Route that creates a User
  router.post('/users', (req,res) => {
      User.add(req.body, (err) => {
        res.status(500).json(err);
      }, (data) => {
        res.status(200).json(data);
      });
  });

  //Route that shows a specific User
  router.get('/users/:id', function(req,res){
    req.body.id = req.params.id;
    User.one(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    })
  });

  //Route that updates a specific User
  router.post('/users/:id', function(req,res){
    req.body.id = req.params.id;
    User.update(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    })
  });

  //Route that deletes a specific User
  router.delete('/users/:id', function(req,res){
    req.body.id = req.params.id;
    User.remove(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    })
  });

  return router;
}
