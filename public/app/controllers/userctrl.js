'use strict';

angular.module('Andejobs')
  .controller('UserCtrl', ['$scope', '$location', function($scope, $location) {
    (function($) {
      $(function() {
        $('.parallax').parallax();
        $('.scrollspy').scrollSpy();
      });
    })(jQuery);
  }]);
