  'use strict';

  angular.module('Andejobs')
      .controller('JobCtrl', ['$scope', 'JobService', '$location', function($scope, JobService, $location) {

          (function($) {
              $(function() {
                  $('.parallax').parallax();
                  $('.scrollspy').scrollSpy();
                  $('#textarea1').val('n');
                  $('#textarea1').trigger('autoresize');
              });
          })(jQuery);

          $scope.addJob = function() {
              JobService.post($scope.job).then(function(res) {
                  if (res.success === false) {
                      console.log("failed to add new job!");
                      $location.path('/');
                  } else {
                      console.log("new job added successfully!");
                      $location.path('/jobs')
                  }
              }, function(err) {
                  console.log("an error occured", err);
              });
          };
      }]);
