module.exports = function(express){
  var router = express.Router();

  router.get('/status', function(req,res){
    res.json({healthy:true});
  })

  return router;
}
