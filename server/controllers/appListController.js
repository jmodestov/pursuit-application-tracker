// import db model
const Application = require('../models/applicationModel');

const appListController = {};

appListController.getAllApps = (req, res, next) => {
  Application.find({}, (err, apps) => {
    if (err) {
      console.log('error while retreiving all applications');
      return next();
    }
    console.log('Retrieving all job applications');
    console.log(apps);
    // app will be an empty array if the DB applications collection is empty
    res.locals.apps = apps;
    return next();
  });
};

appListController.newAppItem = (req, res, next) => {
  Application.create(
    {
      companyName: 'Neflix',
      positionTitle: 'Software Engineer',
      dateApplied: '09/20/20',
      status: 'Pending',
    },
    (err, app) => {
      if (err) {
        console.log('There was an error creating new job item');
        console.log(err);
        return next();
      }
      console.log(app);
      return next();
    }
  );
};

module.exports = appListController;
