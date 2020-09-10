const express = require('express');
const appListController = require('../controllers/appListController');

const router = express.Router();

router.get('/', appListController.getAllApps, (req, res) => {
  res.sendStatus(200);
});

router.post('/', appListController.newAppItem, (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
