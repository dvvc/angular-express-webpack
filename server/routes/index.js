'use strict';

const express = require('express');
const router = express.Router();

router.get('/api', function(req, res, next) {
  res.json({message: 'Hello world!'});
});

module.exports = router;
