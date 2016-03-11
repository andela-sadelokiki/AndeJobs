var config = require("../../config/config.js")
var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');
var crypto = require('crypto');

var userSchema = new Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  salt: {
    type: String,
    required: 'Provide password'
  },
  hash: {
    type: String,
    required: 'Provide password'
  },
  token: String,
  isAdmin: {
    type: Boolean,
    default: false
  },
  jobs: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Job'
  }]
});

userSchema.methods.setPassword = function(password) {
  this.salt = crypto.randomBytes(16).toString('hex');
  this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex');
};
userSchema.methods.validPassword = function(password) {
  var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex');
  return this.hash === hash;
};

userSchema.methods.generateJWT = function() {
  var today = new Date();
  var exp = new Date(today);
  exp.setDate(today.getDate() + 60);
  var token = jwt.sign({
    username: this.username,
    email: this.email,
    exp: parseInt(exp.getTime() / 1000),
  }, config.secret);
  return token;
};

module.exports = mongoose.model('User', userSchema);
