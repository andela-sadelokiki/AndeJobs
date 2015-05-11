var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var jobSchema = new Schema({
	title: {type: String, required: true},
	details:{type: String},
	location: String,
	date_posted: { type: String},
	closing_date: String,
  name: String
	//link: String

	
});

mongoose.model('Job', jobSchema);
