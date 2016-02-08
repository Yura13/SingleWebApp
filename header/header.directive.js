(function() {
    'use strict';

    angular.module('app')
        .directive("appHeader", appHeader);

    function appHeader() {
        var directive = {
            restrict: 'EA',
            templateUrl: 'header/header.directive.html'
        };

        return directive;
    }
})();