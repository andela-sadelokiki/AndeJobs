  'use strict';

  angular.module('Andejobs')
      .controller('UserCtrl', ['$scope', 'UserService', '$location', '$rootScope', function($scope, UserService, $location, $rootScope) {
          (function($) {
              $(function() {
                  $('.parallax').parallax();
                  $('.scrollspy').scrollSpy();
              });
          })(jQuery);

          $scope.saveToSessionStorage = function(id, token) {
            console.log('saving to session storage');
              $window.sessionStorage.token = token;
              $window.sessionStorage.userId = id;
          };

          $scope.signup = function() {
              UserService.register($scope.user).then(function(res) {
                  if (res.success === false) {
                      console.log("Registration failed");
                      $location.path('/');
                  } else {
                      $rootScope.user = res.config.data;
                      $location.path('/dashboard');
                  }
              }, function(err) {
                  console.log("an error occured", err);
              });
          };

          $scope.signin = function() {
              UserService.authenticate($scope.user).then(function(res) {
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
      }]);
