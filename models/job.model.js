var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var jobSchema = new Schema({
	title: {type: String, required: 'Title is required'},
	details:{type: String},
	Description:{
		location: String,
		date_posted: { type: Date, required: true },
		closing_date: Date,
		link: String
	}


});
//module.exports = mongoose.model('Job', jobSchema);
mongoose.model('jobs', jobSchema);