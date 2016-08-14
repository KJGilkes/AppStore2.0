const db = require('./db');
const utility = require('../../utility_tool/util');

// Creates an App in the database
exports.add = (payload, err, success) => {
  db.App.create(payload).then(success).catch(err);
  utility.debug('App created.', 200);
};

// Finds all Apps in the database
exports.all = (err, success) => {
  db.App.findAll().then(success).catch(err);
  utility.debug('Apps found.', 200);
};

// Finds a specific App in the database
exports.one = (payload, err, success) => {
  db.App.find({
    where: {
      id: payload.id,
    },
    // Finds all related content in sequelize
    include: [{
      all: true,
      nested: true,
    }],
  }).then(success).catch(err);
  utility.debug('Specific app found.', 200);
};

// Updates a specifc App in the database
exports.update = (payload, err, success) => {
  db.App.find({
    where: {
      id: payload.id,
    },
  }).then((existingData) => {
    existingData.updateAttributes(payload).then(success).catch(err);
  }).catch(err);
  utility.debug('Specific app updated.', 200);
};

// Deletes a specific App from the database
exports.remove = (payload, err, success) => {
  db.App.destroy({
    where: {
      id: payload.id,
    },
  }).then(success).catch(err);
  utility.debug('App deleted.', 200);
};
