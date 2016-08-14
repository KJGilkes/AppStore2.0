const db = require('./db');
const utility = require('../../utility_tool/util');

// Creates a User in the database
exports.add = (payload, err, success) => {
  db.User.create(payload).then(success).catch(err);
  utility.debug('User created.', 200);
};

// Finds all Users in the database
exports.all = (err, success) => {
  db.User.findAll().then(success).catch(err);
  utility.debug('Users found.', 200);
};

// Finds a specific User in the database
exports.one = (payload, err, success) => {
  db.User.find({
    where: {
      id: payload.id,
    },
    // Finds all related content in sequelize
    include: [{
      all: true,
      nested: true,
    }],
  }).then(success).catch(err);
  utility.debug('Specific user found.', 200);
};

// Updates a specific User in the database
exports.update = (payload, err, success) => {
  db.User.find({
    where: {
      id: payload.id,
    },
  }).then((existingData) => {
    existingData.updateAttributes(payload).then(success).catch(err);
  }).catch(err);
  utility.debug('User updated.', 200);
};

// Deletes a specfifc User from the database
exports.remove = (payload, err, success) => {
  db.User.destroy({
    where: {
      id: payload.id,
    },
  }).then(success).catch(err);
  utility.debug('User deleted.', 200);
};
