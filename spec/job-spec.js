require('../models/job.model');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/myDatabase');;
var Job = mongoose.model('Job'),
myJob;

describe('Job model test', function(){
	 beforeEach(function(done){
		myJob = new Job();
    done();
	});

   describe('should not save if the title field is empty', function(){
    it('should throw an error',function(done){
      myJob.title = '';
      myJob.save(function(error){
        expect(error).toBeDefined();
        console.log(error);
        done();
      });
    });

    it('should save the job', function(done){
      myJob.title= "Andela Talent Accelerators";
      myJob.details="Whatever",
      myJob.location="Lagos",
      myJob.date_posted= "date posted",
      myJob.closing_date="closing date",
      myJob.link="andela.co"

      myJob.save(function(error){
        expect(error).toBeNull();
        done();
      });
    });
  });
});