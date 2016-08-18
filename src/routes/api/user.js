const User = require('../../models/userModel');
const utility = require('kj_utility_tool');

module.exports = (express) => {
  const router = express.Router();

  // Route that shows all of the Users
  router.get('/users', (req, res) => {
    User.all((err) => {
      res.status(444).json(err);
      utility.debug('Could not reach all users route.', 444);
    }, (data) => {
      res.status(200).json(data);
      utility.debug('Read all users route hit.', 200);
    });
  });

  // Route that creates a User
  router.post('/users', (req, res) => {
    User.add(req.body, (err) => {
      res.status(444).json(err);
      utility.debug('Could not reach create user route.', 444);
    }, (data) => {
      res.status(200).json(data);
      utility.debug('Create user route hit.', 200);
    });
  });

  // Route that shows a specific User
  router.get('/users/:id', (req, res) => {
    const bodyId = {
      id: req.params.id,
    };
    User.one(bodyId, (err) => {
      res.status(444).json(err);
      utility.debug('Could not reach specific users route.', 444);
    }, (data) => {
      res.status(200).json(data);
      utility.debug('Specific user route hit.', 200);
    });
  });

  // Route that updates a specific User
  router.post('/users/:id', (req, res) => {
    const body = {
      id: req.params.id,
      name: req.body.name,
      age: req.body.age,
      hobby: req.body.hobby,
    };
    User.update(body, (err) => {
      res.status(444).json(err);
      utility.debug('Could not reach update user route.', 444);
    }, (data) => {
      res.status(200).json(data);
      utility.debug('Update user route hit.', 200);
    });
  });

  // Route that deletes a specific User
  router.delete('/users/:id', (req, res) => {
    const bodyId = {
      id: req.params.id,
    };
    User.remove(bodyId, (err) => {
      res.status(444).json(err);
      utility.debug('Could not reach delete users route.', 444);
    }, (data) => {
      res.status(200).json(data);
      utility.debug('Delete user route hit.', 200);
    });
  });

  // Route that gets the apps of a specific User
  router.get('/users/:id/apps', (req, res) => {
    const bodyId = {
      id: req.params.id,
    };
    User.one(bodyId, (err) => {
      res.status(444).json(err);
      utility.debug('Could not reach read all of a users apps route.', 444);
    }, (data) => {
      res.status(200).json(data.Apps);
      utility.debug('Read all specific users apps route hit.', 200);
    });
  });

  return router;
};
