var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema= new Schema({
	first_Name: {
		type : String, 
		required: true
	},
	last_Name: {
		type : String, 
		required: true
	},
	email_Address: {
		type : String, 
		required: true,
    unique: true
	},
	user_Name: {
		type : String, 
		required: true,
    unique: true
    
	},
	password: {
		type : String, 
		required: true
    
	},
	mobile_Number: {
		type : Number, 
		required: true,
    unique: true
	}

});

mongoose.model('users', userSchema);


