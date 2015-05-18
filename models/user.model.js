var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema= new Schema({
	firstname: {
		type : String, 
		required: true
	},
	lastname: {
		type : String, 
		required: true
	},
	email: {
		type : String, 
		required: true,
    unique: true
	},
	username: {
		type : String, 
		required: true,
    unique: true
	},
	password: {
		type : String, 
		required: true,
		select: false
    
	},
	mobilenumber: {
		type : Number, 
		required: true,
    unique: true
	},
	isAdmin:{
		type: Boolean,
		default: false
	},
	token: String

});

mongoose.model('users', userSchema);


