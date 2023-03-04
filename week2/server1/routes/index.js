const fetch = require("node-fetch");
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'calculator' });
});


router.post('/add', function(req, res, next) {
  let firstNo = req.body.firstNo;
  let secondNo = req.body.secondNo;
  fetch('http://localhost:3000/add', {
    method: 'post',
    body: JSON.stringify({firstNumber: firstNo,
                            secondNumber: secondNo}),
    headers: {'Content-Type': 'application/json'},
  }).then (res => res.json())
  .then(json => res.render('index', {title: " The result is:"+json.result}))
  .catch(err => res.render('index', {title: err}))
  });

module.exports = router;
