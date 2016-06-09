'use strict';

angular.module('Andejobs')
    .controller('HomeCtrl', ['$scope', '$location', function($scope, $location) {
        (function($) {
            $(function() {
                $('.parallax').parallax();
                $('.scrollspy').scrollSpy();
            });
        })(jQuery);
    }]);
