var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
mongoose.connect('mongodb://localhost/Andejobs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.listen(3000, function(err){
  if (err){
    console.log(err);
  }
  console.log('server started on port 3000');
});