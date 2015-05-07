var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema= new Schema({
	first_Name: {
		type : String, 
		required: "first name is required"
	},
	last_Name: {
		type : String, 
		required: "last name is required"
	},
	email_Address: {
		type : String, 
		required: "email address is required"
	},
	user_Name: {
		type : String, 
		required: "username is required"
	},
	password: {
		type : String, 
		required: "password is required"
	},
	mobile_Number: {
		type : Number, 
		required: "mobile number is required"
	}

});

mongoose.model('users', userSchema);


