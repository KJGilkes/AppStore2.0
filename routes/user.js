module.exports = function(express){
  var router = express.Router();

  //Route that shows all of the apps
  router.get('/users', function(req,res){
    res.json([{
      "user": {
        "id": "2",
        "name": "Gilkes"
      }
    },{
      "user": {
        "id": "3",
        "name": "Khalil"
      }
    }]);
  })

  router.get('/users/:id', function(req,res){
    if(req.params.id == 2){
      res.json({
      "user": {
        "id": "2",
        "name": "Gilkes"
        }
      })
    }else {
      res.json(
          {
          "id": "3",
          "name": "Khalil"
          }
        )
      }
  })

  return router;
}
