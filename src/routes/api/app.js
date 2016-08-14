const App = require('../../models/appModel');
const utility = require('../../../utility_tool/util');

module.exports = (express) => {
  const router = express.Router();

  // Route that shows all of the Apps
  router.get('/apps', (req, res) => {
    App.all((err) => {
      res.status(444).json(err);
      utility.debug('Could not reach all apps route.');
    }, (data) => {
      res.status(200).json(data);
      utility.debug('Read all apps route hit.');
    });
  });

  // Route that creates an App
  router.post('/apps', (req, res) => {
    App.add(req.body, (err) => {
      res.status(444).json(err);
      utility.debug('Could not reach create app route.');
    }, (data) => {
      res.status(200).json(data);
      utility.debug('Create app route hit.');
    });
  });

  // Route that shows a specific App
  router.get('/apps/:id', (req, res) => {
    const bodyId = {
      id: req.params.id,
    };
    App.one(bodyId, (err) => {
      res.status(444).json(err);
      utility.debug('Could not reach specific app route.');
    }, (data) => {
      res.status(200).json(data);
      utility.debug('Read one app route hit.');
    });
  });

  // Route that updates a specific App
  router.post('/apps/:id', (req, res) => {
    const body = {
      id: req.params.id,
      userID: req.body.userID,
      title: req.body.title,
      description: req.body.description,
    };
    App.update(body, (err) => {
      res.status(444).json(err);
      utility.debug('Could not reach update specific app route.');
    }, (data) => {
      res.status(200).json(data);
      utility.debug('Update specific app route hit.');
    });
  });

  // Route that deletes a specific App
  router.delete('/apps/:id', (req, res) => {
    const bodyId = {
      id: req.params.id,
    };
    App.remove(bodyId, (err) => {
      res.status(444).json(err);
      utility.debug('Could not reach delete app route.');
    }, (data) => {
      res.status(200).json(data);
      utility.debug('Delete app route hit.');
    });
  });

  return router;
};
