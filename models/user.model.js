var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema= new Schema({
	name: String,
	username: {type : String, required: "username is required"},
	password: {type : String, required: "password is required"}

});

var User = mongoose.model('User', userSchema);


