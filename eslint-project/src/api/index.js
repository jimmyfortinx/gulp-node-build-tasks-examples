var express = require('express');
var router = express.Router();
var controller = require('./api.controller');

router.get('/awesome-list', controller.getAwesomeList);
router.get('/awesome-list/find/firstname/:firstname', controller.findFirstname);

module.exports = router;
