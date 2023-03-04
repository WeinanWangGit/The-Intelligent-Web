var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("test come in")
  res.render('index', { title: 'My Chat' });
});

module.exports = router;
