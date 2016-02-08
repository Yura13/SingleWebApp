(function() {
    'use strict';

    angular.module('app', ['ui.router'])
        .config(config);

    function config($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state("home", {
                url: "/",
                templateUrl: "home/home.html",
                controller: 'homeController',
                controllerAs: 'info'
            })
            .state("home.details", {
                views: {
                    "details": {
                        templateUrl: "home/home.details.html",
                        controller: 'homeDetailsController',
                        controllerAs: 'detail'
                    }
                }
            })
            .state("arraysFilter", {
                url: "/arraysFilter",
                templateUrl: "arraysFilter/arraysFilter.html",
                controller: 'arraysFilterController',
                controllerAs: 'vm'
            })
            .state("about", {
                url: "/about",
                templateUrl: "about/about.html",
                controller: 'aboutController',
                controllerAs: 'about'
            })
    }

})();
