  'use strict';

  angular.module('Andejobs')
      .controller('JobCtrl', ['$scope', 'JobService', '$location', function($scope, JobService, $location) {
          (function($) {
              $(function() {
                  $('.modal-trigger').leanModal();
                  $('.parallax').parallax();
                  $('.scrollspy').scrollSpy();
                  // $('#textarea1').val('New Text');
                  // $('#textarea1').trigger('autoresize');
                  $('.modal-trigger').leanModal();

              });
          })(jQuery);

          $scope.addJob = function() {
              JobService.post($scope.job).then(function(res) {
                  if (res.success === false) {
                      console.log("failed to add new job!");
                      $location.path('/');
                  } else {
                      console.log(res, "new job added successfully!");
                      $location.path('/jobs')
                  }
              }, function(err) {
                  console.log("an error occured", err);
              });
          };

          JobService.getAll().then(function(res) {
              $scope.alljobs = res.data;
          });

          $scope.apply = function(id) {
              $('#apply').openModal({
                  dismissible: true,
                  opacity: .7
              });
          };
      }]);
