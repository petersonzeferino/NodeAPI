'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/index-controller');

router.get('/index', controller.get);

module.exports = router;