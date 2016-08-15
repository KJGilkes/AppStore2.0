const expect = require('chai').expect;
const utility = require('../utility_tool/util');
const App = require('../src/models/appModel');

let testApp = {};

describe('Apps', () => {
  /* eslint-disable */
  beforeEach((done) => {
  /* eslint-enable */
    const dummyApp = {
      title: 'Overwatch',
      description: 'Play as your favorite heroes in this team based shooter.',
    };

    App.add(dummyApp, (error) => {
      utility.debug(dummyApp);
      utility.debug('Error creating test App.', error);
    }, (newDbApp) => {
      testApp = newDbApp;
      done();
    });
  });

  /* eslint-disable */
  afterEach((done) => {
  /* eslint-enable */
    if (testApp) {
      App.remove(testApp, (err) => utility.debug('Error destroying test App', err),
       (responseFromDestroy) => {
         expect(responseFromDestroy).to.be.equal(1);
       });
    }
    done();
  });

  it('Should be able to Read All Apps', (done) => {
    App.all((error) => {
      utility.debug('Error', error);
    }, (allApps) => {
      expect(allApps.length).to.be.above(0);
      done();
    });
  });

  it('Should be able to Read One App', (done) => {
    App.one(testApp, (error) => utility.debug('Error reading test App.', error),
     (oneApp) => {
       utility.debug(oneApp);
       expect(oneApp.id).to.be.equal(testApp.id);
       done();
     });
  });
  it('Should be able to Create an App', (done) => {
    /* eslint-disable */
    expect(testApp.id).to.be.not.be.null;
    done();
    /* eslint-enable */
  });
  it('Should be able to Update that App', (done) => {
    const updateInfo = {
      id: testApp.id,
      title: 'Dread Down',
    };
    App.update(updateInfo, (err) => utility.debug('Error updating App.', err),
     (updatedDbApp) => {
       utility.debug(updatedDbApp);
       expect(updatedDbApp.name).to.be.equal(updateInfo.name);
       testApp = updatedDbApp;
       done();
     });
  });
});
