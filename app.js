var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var jwt        = require("jsonwebtoken");

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/myDatabase');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST,PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
    next();
});




require('./routes/job.routes.js')(app);
require('./routes/user.routes.js')(app);

module.exports = app;