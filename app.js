var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost/Andejobs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

var port = process.env.PORT || 3000; 

require('./index')(app);

app.listen(port);
console.log('Magic happens on port ' + port);