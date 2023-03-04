const fetch = require("node-fetch");

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/* GET home page. */
router.get('/reddit', function(req, res, next) {
  fetch("https://www.reddit.com/r/USA/top.json?limit=10&t=year")
      .then((response)=>response.json())
      .then((data)=>{res.render('index', data)})
      // .then((body) => {
      //   res.send(body);
      // });
});

module.exports = router;
