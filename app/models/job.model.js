var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var jobSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  location: String,
  applicationDeadline: {
    type: Date
  },
  applicants: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }]
});


mongoose.model('Job', jobSchema);