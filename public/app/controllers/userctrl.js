  'use strict';

  angular.module('Andejobs')
    .controller('UserCtrl', ['$scope', 'UserService', '$location', function($scope, UserService, $location) {
      (function($) {
        $(function() {
          $('.parallax').parallax();
          $('.scrollspy').scrollSpy();
        });
      })(jQuery);


      $scope.saveToSessionStorage = function(id, token) {
        $window.sessionStorage.token = token;
        $window.sessionStorage.userId = id;
      };

      $scope.signup = function() {
        UserService.register($scope.user).then(function(res) {
          if (res.success === false) {
            console.log("Registration failed");
            $location.path('/');
          } else {
            console.log("u r registered");
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
            $location.path('/dashboard');
          }
        }, function(err) {
          console.log('err', err);
        });
      };
    }]);
