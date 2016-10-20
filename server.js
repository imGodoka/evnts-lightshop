const express = require('express');
const bodyParser= require('body-parser')
const app = express();
var mongoose = require('mongoose');
var router = express.Router();
var util = require('util');
var mongodb = require('mongodb');

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');



//conexão com mongoose
var MongoClient = mongodb.MongoClient;
var url = 'mongodb://localhost:27017/database';

var db;

// Use connect method to connect to the Server
MongoClient.connect(url, (err, database) => {
   if (err) {
    console.log('Unable to connect to the mongoDB server. Error:', err);
  } else {
    //HURRAY!! We are connected. :)
    console.log('Connection established to', url);

    // do some work here with the database.
	db = database;
  }
});


app.listen(3000, function() {
  console.log('listening on 3000')
}) 
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.get('/listagem', (req, res) => {
    db.collection('database').find().toArray((err, result) => {
    if (err) return console.log(err)
    // renders kistagem.ejs
    res.render('listagem.ejs', {database: result})
  })
})


app.post('/listagem', (req, res) => {  
 
	db.collection('database').save(req.body, (err, result) => {
    if (err) return console.log(err)

    console.log('saved to database')
    res.redirect('/listagem')
  })
  
})

