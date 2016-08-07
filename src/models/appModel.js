const db = require('./db');

//Creates an App in the database
exports.add = (payload, err, success) => {
  db.App.create(payload).then(success).catch(err);
}

//Finds all Apps in the database
exports.all = ( err, success) => {
  db.App.findAll().then(success).catch(err);
}

//Finds a specific App in the database
exports.one = (payload, err, success) => {
  db.App.find({
    where: {
      id:payload.id,
    },
    //Finds all related content in sequelize
    include: [{
      all:true,
      nested:true,
    }],
  }).then(success).catch(err);
}

//Updates a specifc App in the database
exports.update = (payload, err, success) => {
  db.App.find({
    where: {
      id:payload.id,
    }
  }).then( (existingData) => {
    existingData.updateAttributes(payload).then(success).catch(err);
  }).catch(err);
}

//Deletes a specific App from the database
exports.remove = (payload, err, success) => {
  db.App.destroy({
    where: {
      id:payload.id,
    }
  }).then(success).catch(err);
}
