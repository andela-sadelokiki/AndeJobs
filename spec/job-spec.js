'use strict'
require('./app')
mongoose = require('mongoose'),
var Job = mongoose.model('Job');

var populateDatabase = function(count, callback){
	for(var i=0; i< count; i++){
		Job.create({
			title: 'Recruitment Agent' + i,
			details: 'Awesome recruiter(male/female) who can read minds and pick the best of the best',
			Description:{
				location: 'lagos',
				date_posted: Date.now(),
				closing_date: Date.now(),
				link: 'apply@andela.co'

		}, callback);
	}
};

describe('')