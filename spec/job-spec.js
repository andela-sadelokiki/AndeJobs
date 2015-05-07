require('../models/job.model');
var mongoose = require('mongoose');
var Job = mangoose.model('jobs');


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

describe('Job model', function(){
	beforeEach(function(done){
		Job.remove().exec(function(){
			done();
		})
	});
	afterEach(function(done){
		Job.remove().exec(function(){
			done();
		})
	});
	it('should be defined', function(done){
		expect(Job).toBeDefined();
		done();
	});
});