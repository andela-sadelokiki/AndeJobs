var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var jobSchema = new Schema({
	title: {type: String, required: true},
	details:{type: String},
	Description:{
		location: String,
		date_posted: { type: Date, required: true },
		closing_date: Date,
		link: String
	}
});

mongoose.model('Job', jobSchema);
