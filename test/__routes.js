const request = require('supertest');
const utility = require('../utility_tool/util');
const server = require('../src/server');

let mUser = {};
let mApp = {};

describe('User Routes', () => {
    /* eslint-disable */
    beforeEach(() => {
    /* eslint-enable */
      const tempUser = {
        name: 'Flabibbitous',
        age: 35,
        hobby: 'Flashmoigady',
      };
      mUser = tempUser;
      const tempApp = {
        name: 'Flabibbitous',
        age: 35,
        hobby: 'Flashmoigady',
      };
      mApp = tempApp;
    });

  const routesToTest = [
    {
      titleForIt: 'This route looks up users',
      payload: { },
      expectedResponseToHaveProperties: ['id', 'name', 'age', 'hobby'],
      route: '/api/v1/users',
      method: 'get',
    },
    {
      titleForIt: 'This route looks up a specific user',
      payload: { mUser },
      expectedResponseToHaveProperties: ['id', 'name', 'age', 'hobby'],
      route: '/api/v1/users/' + mUser.id,
      method: 'get',
    },
    {
      titleForIt: 'This route creates a user',
      payload: { mUser },
      expectedResponseToHaveProperties: ['id', 'name', 'age', 'hobby'],
      route: '/api/v1/users/',
      method: 'post',
    },
    {
      titleForIt: 'This route updates a specific user',
      payload: { mUser },
      expectedResponseToHaveProperties: ['id', 'name', 'age', 'hobby'],
      route: '/api/v1/users/' + mUser.id,
      method: 'post',
    },
    {
      titleForIt: 'This route looks up all apps',
      payload: { },
      expectedResponseToHaveProperties: ['id', 'title', 'description'],
      route: '/api/v1/apps',
      method: 'get',
    },
    {
      titleForIt: 'This route looks up a specific app',
      payload: { mUser },
      expectedResponseToHaveProperties: ['id', 'title', 'description'],
      route: '/api/v1/apps/' + mApp.id,
      method: 'get',
    },
    {
      titleForIt: 'This route creates an app',
      payload: { mUser },
      expectedResponseToHaveProperties: ['id', 'title', 'description'],
      route: '/api/v1/apps/',
      method: 'post',
    },
    {
      titleForIt: 'This route updates a specific app',
      payload: { mUser },
      expectedResponseToHaveProperties: ['id', 'title', 'description'],
      route: '/api/v1/apps/' + mApp.id,
      method: 'post',
    },
  ];

  routesToTest.forEach((route) => {
    it(route.titleForIt, (done) => {
      request(server)
          .get(route.route)
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end((err) => {
            if (err) throw err;
          });
      done();
    });
  });


    /* eslint-disable */
    afterEach(() => {
    /* eslint-enable */
      it('Should be able to delete from the users route.', (done) => {
        utility.debug(mUser.id);
        request(server).delete('/api/users/' + mUser.id).expect(200)
        .end(done);
      });
      it('Should be able to delete from the apps route.', (done) => {
        utility.debug(mApp.id);
        request(server).delete('/api/users/' + mApp.id).expect(200)
        .end(done);
      });
    });
});
