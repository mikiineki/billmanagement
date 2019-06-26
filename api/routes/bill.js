var express = require('express');
var router = express.Router();

router.get('/history', function(req, res, next) {
  res.send('history');

});

module.exports = router;
