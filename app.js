var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost/myDatabase');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

require('./routes/job.routes.js')(app);
require('./routes/user.routes.js')(app);
//var routes = require('./index')(app);


var port = process.env.PORT || 3000; 




app.listen(port);
console.log('Magic happens on port ' + port);

module.exports = app;