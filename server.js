
var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('contactlist', ['contactlist']);
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.get('/gallery', function (req, res) {
  console.log('I received a GET request');

    var gallery = [
        {
            name: "Stewie",
            gender: "Male",
            age: 8,
            photo: "images/Stewie.jpg",
            likes: 0
        },
        {
            name: "Peter",
            gender: "Male",
            age: 44,
            photo: "images/Peter.jpg",
            likes: 0
        },
        {
            name: "Lois",
            gender: "Female",
            age: 43,
            photo: "images/Lois.jpg",
            likes: 0          
        },
        {
            name: "Brian",
            gender: "Male",
            age: 8,
            photo: "images/Brian.jpg",
            likes: 0         
        },
        {
            name: "Meg",
            gender: "Female",
            age: 16,
            photo: "images/Meg.jpg",
            likes: 0
        }, 
        {
            name: "Quagmire",
            gender: "Male",
            age: 44,
            photo: "images/Quagmire.jpg",
            likes: 0
        }
    ];
    res.json(gallery);
  /*res.send('hello');

  db.character.find(function (err, docs) {
    console.log(docs);
    res.json(docs);
  });*/
});


app.listen(3333);
console.log("running...");