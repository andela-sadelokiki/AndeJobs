'use strict';

var app = require('../app.js');
var request = require('supertest')(app);

describe('Test for job route', function(){

  it('should return error message when route is not found', function(done){
    request.get('/')
    .expect(404)
    .end(function(err, res){
      if(err){
        return done(err);
      }
      done();
    });
  });


 it('Test GET method for /api/v1/jobs', function(done){
   request
   .get('/api/v1/jobs')
   .expect(201)
   //.expect('Content-Type', 'application/json; charset=utf-8')
   .end(function(err, res){
     if(err){
       return done(err);
     }
     console.log(res.body);
     done();
   });
  it('should make a POST request and successfully create a new user profile', function(done){
    var newUser = {
      firstname: 'susan',
      lastname: 'adelokiki'
      email: 'susanadelokiki@gmail.com',
      password: 'password',
      username: 'susanna'
      mobilenumber: 07011833492
    };
    request.post('/api/v1/users')
    .send(newUser)
    .expect({lastname: 'adelokiki'})
    .expect(200)
    .end(function(err, res){
      if(err){
        return done(err);
      }
      done();
    });
  });

 });