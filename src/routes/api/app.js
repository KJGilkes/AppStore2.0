const App = require('../../models/AppModel');
const utility = require('../../../utility_tool/util');

module.exports = function(express){
  var router = express.Router();

  //Route that shows all of the Apps
  router.get('/apps', function(req,res){
    App.all( (err) => {
      res.status(444).json(err);
      utility.debug(colors.yellow('Could not reach all apps route.'));
    }, (data) => {
      res.status(200).json(data);
      utility.debug(colors.green('Read all apps route hit.'));
    })
  });

  //Route that creates an App
  router.post('/apps', (req,res) => {
      App.add(req.body, (err) => {
        res.status(444).json(err);
        utility.debug(colors.yellow('Could not reach create app route.'));
      }, (data) => {
        res.status(200).json(data);
        utility.debug(colors.green('Create app route hit.'));
      })
  });

  //Route that shows a specific App
  router.get('/apps/:id', function(req,res){
    req.body.id = req.params.id;
    App.one(req.body, (err) => {
      res.status(444).json(err);
      utility.debug(colors.yellow('Could not reach specific app route.'));
    }, (data) => {
      res.status(200).json(data);
      utility.debug(colors.green('Read one app route hit.'));
    })
  });

  //Route that updates a specific App
  router.post('/apps/:id', function(req,res){
    req.body.id = req.params.id;
    App.update(req.body, (err) => {
      res.status(444).json(err);
      utility.debug(colors.yellow('Could not reach update specific app route.'));
    }, (data) => {
      res.status(200).json(data);
      utility.debug(colors.green('Update specific app route hit.'));
    });
  });

  //Route that deletes a specific App
  router.delete('/apps/:id', function(req,res){
    req.body.id = req.params.id;
    App.remove(req.body, (err) => {
      res.status(444).json(err);
      utility.debug(colors.yellow('Could not reach delete app route.'));
    }, (data) => {
      res.status(200).json(data);
      utility.debug(colors.green('Delete app route hit.'));
    })
  });

  return router;
}
