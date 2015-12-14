
var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('character', ['character']);
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.get('/gallery', function (req, res) {
  console.log('I received a GET request');
  console.log(db);
  db.character.find(function(err,docs){
    console.log(docs);
    res.json(docs);
  });

});


app.listen(3333);
console.log("running...");