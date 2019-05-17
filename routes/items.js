var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond items with a resource for user with id ' + req.query.id);
});


module.exports = router;
