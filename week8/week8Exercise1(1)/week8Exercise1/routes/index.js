var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



router.get('/paris', function(req, res, next) {

// The DBpedia resource to retrieve data from

    const resource = 'http://dbpedia.org/resource/Paris';

    // The DBpedia SPARQL endpoint URL
    const endpointUrl = 'https://dbpedia.org/sparql';


    // The SPARQL query to retrieve data for the given resource
    const sparqlQuery = `
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX dbo: <http://dbpedia.org/ontology/>

SELECT ?label ?country
WHERE {
  <http://dbpedia.org/resource/Paris> rdfs:label ?label .
  <http://dbpedia.org/resource/Paris> dbo:country ?country .
  FILTER (langMatches(lang(?label), "en"))
}
`;



// Encode the query as a URL parameter
    const encodedQuery = encodeURIComponent(sparqlQuery);


// Build the URL for the SPARQL query
    const url = `${endpointUrl}?query=${encodedQuery}&format=json`;


// Use fetch to retrieve the data
    fetch(url)
        .then(response => response.json())
        .then(data => {
            // The results are in the 'data' object
            const bindings = data.results.bindings;
            const result = JSON.stringify(bindings);

            // Render the result in your paris.ejs page
            res.render('paris', { title: bindings[0].label.value, country: bindings[0].country.value, JSONresult: result });

        });
});





module.exports = router;

