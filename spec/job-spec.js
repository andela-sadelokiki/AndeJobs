require('../models/job.model');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/myDatabase');;
Job = mongoose.model('Job');

//var 
  


  describe('Job model test', function(){
	 beforeEach(function(done){
		myJob = new jobs();
    done();
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