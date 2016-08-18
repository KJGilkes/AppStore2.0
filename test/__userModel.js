const expect = require('chai').expect;
const utility = require('kj_utility_tool');
const user = require('../src/models/userModel');

let testUser = {};

describe('Users', () => {
  /* eslint-disable */
  beforeEach((done) => {
  /* eslint-enable */
    const dumbUser = {
      name: 'De Marcus',
      age: 22,
      hobby: 'Skating',
    };
    user.add(dumbUser, (error) => {
      utility.debug('Error creating dummy user.', error);
    }, (newDbUser) => {
      testUser = newDbUser;
      done();
    });
  });

  /* eslint-disable */
  afterEach((done) => {
  /* eslint-enable */
    if (testUser) {
      user.remove(testUser, (err) => utility.debug('Error destroying test user', err),
       (responseFromDestroy) => {
         expect(responseFromDestroy).to.be.equal(1);
       });
    }
    done();
  });

  it('Should be able to read all users', (done) => {
    user.all((error) => {
      utility.debug('Error', error);
    }, (allUsers) => {
      expect(allUsers.length).to.be.above(0);
      done();
    });
  });

  it('Should be able to read a specific user', (done) => {
    user.one(testUser, (error) => utility.debug('Error reading test user.', error), (oneUser) => {
      expect(oneUser.id).to.be.equal(testUser.id);
      done();
    });
  });
  it('Should be able to create a user', (done) => {
    /* eslint-disable */
    expect(testUser.id).to.be.not.be.null;
    done();
    /* eslint-enable */
  });
  it('Should be able to update that user', (done) => {
    const updateInfo = {
      id: testUser.id,
      name: 'De Marcus',
    };
    user.update(updateInfo, (err) => utility.debug('Error updating user.',
     err), (updatedDbUser) => {
       expect(updatedDbUser.name).to.be.equal(updateInfo.name);
       testUser = updatedDbUser;
       done();
     });
  });
});
