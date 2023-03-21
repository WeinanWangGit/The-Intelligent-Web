var express = require('express');
var router = express.Router();
const character = require("../controllers/characters");
var multer = require('multer');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/insert', function(req, res, next) {
    character.insert(req, res);
});

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/uploads/');
    },
    filename: function (req, file, cb) {
        var original = file.originalname;
        var file_extension = original.split(".");
        // Make the file name the date + the file extension
        filename = Date.now() + '.' + file_extension[file_extension.length-1];
        cb(null, filename);
    }
});

var upload = multer({ storage: storage });




router.post('/add', upload.single('myImg'), function(req, res) {
    console.log(req);
    character.create(req, res)
});







module.exports = router;
