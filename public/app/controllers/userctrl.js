  'use strict';

  angular.module('Andejobs')
      .controller('UserCtrl', ['$scope', 'UserService', '$location', '$rootScope', '$window', function($scope, UserService, $location, $rootScope, $window) {
          (function($) {
              $(function() {
                  $('.parallax').parallax();
                  $('.scrollspy').scrollSpy();
              });
          })(jQuery);



          $rootScope.signup = function() {
              UserService.register($scope.user).then(function(res) {
                  if (res.success === false) {
                      console.log("failed");
                  } else {
                      console.log(res, 'new bee alert!');
                      $window.sessionStorage.token = res.data.token;
                      $location.path('/dashboard');

                  }
              }, function(err) {
                  console.log(err, 'an error occured');
              })
          };

          $rootScope.signin = function() {
              UserService.login($scope.user).then(function(res) {
                  if (res.success === false) {
                      console.log("login failed");
                      $location.path('/')
                  } else {
                      $rootScope.user = res.config.data;
                      $location.path('/dashboard');
                      console.log(res, "you are logged in!");
                  }
              }, function(err) {
                  console.log('err', err);
              });
          };

          $scope.currentUser = UserService.currentUser();
          $rootScope.logout = function() {
              UserService.logout(function() {
                  window.location = '/';
              }, function() {
                  console.log('failed to logout!')
              });
          };
          $scope.token = $window.sessionStorage.token;

      }]);
