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
		required: true
    
	},
	mobilenumber: {
		type : Number, 
		required: true,
    unique: true
	}

});

module.exports = mongoose.model('users', userSchema);


