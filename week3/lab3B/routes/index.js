var express = require('express');
var router = express.Router();
const character = require("../controllers/characters");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/insert', function(req, res, next) {
    character.insert(req, res);
});


module.exports = router;
