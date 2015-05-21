var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var jobSchema = new Schema({
	title: {
    type: String,
    required: true
  },
	description:{
    type: String
  },
	location: String,
	applicationDeadline: {
    type: Date
  },
  appliedBy:[{
  type:Schema.ObjectId,
  ref: 'user'
}]
});

mongoose.model('job', jobSchema);
