var mongoose = require('mongoose');
var User = mongoose.model('User');
var Job = mongoose.model('Job');

router.get('/jobs', function(req, res, next){
  User.find(function(err, jobs){
    if(err)
    {
      return next(err);
    }
    res.json(jobs);
  });
});

router.post('/jobs', function(req, res, next){
  var job = new Job(req.body);
  post.save(function(err, jobs){
    if(err)
    {
      return next(err);
    }
    res.json
  });
});
router.listen(3000, function(err){
  if (err){
    console.log(err);
  }
  console.log('server started on port 3000');
});