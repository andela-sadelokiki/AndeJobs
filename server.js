var app = require('./app.js')

var port = process.env.PORT || 3000; 
app.listen(port, function(error){
 console.log('Magic happens on port ' + port); 
});