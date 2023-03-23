var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  // fetch data from API
  fetch('https://go-apod.herokuapp.com/apod')
      .then(response => response.json()) // extract json data from response
      .then(data => {
        // render index.ejs and pass the fetched data
        res.render('index', { title: data.title, path: data.url, description: data.explanation });
      })
      .catch(error => {
        console.error(error);
        res.status(500).send('Internal Server Error');
      });
});

module.exports = router;
