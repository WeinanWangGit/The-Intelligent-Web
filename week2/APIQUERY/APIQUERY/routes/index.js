const express = require('express');
const axios = require('axios');
const fetch = require("node-fetch");
var router = express.Router();

/* GET image of the day with axios */
router.get('/axios', function(req, res, next) {
  axios.get('https://go-apod.herokuapp.com/apod')
      .then((response) => {
        console.log(response.data);
        console.log(response.status);
        console.log(response.statusText);
        console.log(response.headers);
        console.log(response.config);
        res.render('index', { title: response.data.title, path: response.data.url, description: response.data.explanation  });
      });
});

/* GET quote of the day with fetch */
router.get('/fetch', function(req, res, next) {
    fetch('https://quotes.toscrape.com/random')
        .then((response) => response.text())
        .then((body) => {
            res.send(body);
        });
});


router.get ('/upload_data', function(req, res, next) {
    const url = 'https://api.restful-api.dev/objects'
    const data = {
        "name": "Cat",
        "data": {
            "year_born": 2021,
            "name": 'Orion',
            "breed": "siberian"
        }
    };
    const customHeaders = {
        "Content-Type": "application/json",
    }
    fetch(url, {
        method: "POST",
        headers: customHeaders,
        body: JSON.stringify(data),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            res.send(data);
        })
        .catch((error) => {
            console.error(error);
        });
});



module.exports = router;
