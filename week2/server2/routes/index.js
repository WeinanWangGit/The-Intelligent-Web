const fetch = require('node-fetch')
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/add', function(req, res, next) {
  let firstNo= parseInt(req.body.firstNumber);
  let secondNo= parseInt(req.body.secondNumber);
  res.json({result: firstNo+secondNo})
});

module.exports = router;
