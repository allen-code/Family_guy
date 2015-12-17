
var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('character', ['character']);
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.get('/gallery', function (req, res) {
  console.log('I received a GET request');
  //console.log(db);
  db.character.find(function(err,docs){
    //console.log(docs);
    res.json(docs);
  });
});

app.put('/gallery', function (req, res) {
  var id = req.body._id;
  console.log(id);
  db.character.findAndModify({
    query: {_id: mongojs.ObjectId(id)},
    update: {$set: {name: req.body.name, gender: req.body.gender, age: req.body.age, photo: req.body.photo, likes: req.body.likes}},
    new: true}, function (err, doc) {
      res.json(doc);
    }
  );
});

app.listen(8080);
console.log("running...");