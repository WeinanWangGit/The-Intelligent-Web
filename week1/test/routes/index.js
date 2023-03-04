var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',{title:'My Class', login_is_correct: true});
});


/* POST form. */
router.post('/welcome', function(req, res, next) {
  var username = req.body.username;
  var psssword = req.body.password;

  if(username == "COM3504_6504"){
    res.render('welcome',{title:'My Class', login_is_correct: true});
  }else{
    res.render('index', { title: 'My Class', login_is_correct: false});
  }
});


module.exports = router;
