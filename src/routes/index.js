const utility = require('../../utility_tool/util');

module.exports = (express) => {
  const router = express.Router();

  router.get('/status', (req, res) => {
    utility.log('Status route hit');
    res.json({ healthy: true });
  });

// The prefix to the app.js route
  router.use('/api/v1', require('./api/app')(express));
// The prefix to the user.js route
  router.use('/api/v1', require('./api/user')(express));

  return router;
};
