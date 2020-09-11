const express = require('express');
const appListController = require('../controllers/appListController');

const router = express.Router();

router.get('/', appListController.getAllApps, (req, res) => {
  res.status(200).send(res.locals.apps);
});

router.post('/addJobRecord', appListController.newAppItem, (req, res) => {
  // req.body contains company, position, date, title

  res.sendStatus(200);
});

router.post('/deleteRecord', appListController.deleteJob, (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
