var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var jobSchema = new Schema({
	title: {type: String, required: 'Title is required'},
	details:{type: String},
	Description:{
		location: String,
		date_posted: Date,
		closing_date: Date,
		apply_here: String
	}


});
var Job = mongoose.model('Job', jobSchema);