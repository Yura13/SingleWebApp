(function() {
    'use strict';

    angular.module('app')
        .directive("appFooter", appFooter);

    function appFooter() {
        var directive = {
            restrict: 'EA',
            templateUrl: 'footer/footer.directive.html'
        };

        return directive;
    }
})();