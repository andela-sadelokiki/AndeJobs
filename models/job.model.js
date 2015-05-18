var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var jobSchema = new Schema({
	title: {type: String, required: true},
	description:{type: String},
	location: String,
	date_posted: { type: Date},
});

mongoose.model('Job', jobSchema);
