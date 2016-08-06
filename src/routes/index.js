module.exports = (express) => {
  const router = express.Router();

  router.get('/hello', (req,res) => {
    console.log('Hello route hit');
    res.json({healthy:true});
  });

//The prefix to the app.js route
router.use('/api/v1', require('./api/app')(express))
//The prefix to the user.js route
router.use('/api/v1', require('./api/user')(express))

  return router;
}
