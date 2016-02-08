(function() {
    'use strict';

    angular.module('app')
        .controller("arraysFilterController", arraysFilterController);

    function arraysFilterController() {
        var vm = this;
        vm.arr1 = [{value: 0, text: "January"}, {value: 1, text: "February"}, {value: 2, text: "March"},
            {value: 3, text: "April"}, {value: 4, text: "May"}, {value: 5, text: "June"},
            {value: 6, text: "July"}, {value: 7, text: "August"}, {value: 8, text: "September"},
            {value: 9, text: "October"}, {value: 10, text: "November"}, {value: 11, text: "December"}];

        vm.search = "";
        vm.listInput = "";

        vm.clickFilter = clickFilter;

        function clickFilter() {
            vm.newArray = vm.arr1.filter(valueFilter);
        }

        function valueFilter(item) {
            if (vm.listInput.length != 0) {
                var arr2 = vm.listInput;
                for (var i= 0; i < arr2.length; i++)
                    if (item.value == arr2[i]) return false;
            }
            return true;
        }
    }
})();