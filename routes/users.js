var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(req)
  res.send('respond with a resource for user with id ' + req.query.id);
});

router.get('/:userid', function(req, res, next) {
  res.send('respond 2 with a resource for user with id ' + req.query.id);
});

router.post('/:userid', function(req, res, next) {
  res.send('respond post 2 with a resource for user with id ' + req.query.id);
});

module.exports = router;
