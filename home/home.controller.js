(function() {
    'use strict';

    angular.module('app')
        .controller("homeController", homeController);

    function homeController() {
        var vm = this;
        vm.title = "Angular";
        vm.description = "Lorem ipsum dolor sit amet, ut vero erant has, libris equidem est te, ius te agam eruditi. Est cu oratio vivendo, eu enim quidam his. No quod numquam sea, id fabulas tractatos mediocrem duo. Mei ex enim tritani adipisci. Ius nonumes nostrum efficiantur ad, eam ut timeam consequat, harum prompta salutatus te usu. Et erant recteque nec, cu unum soluta duo, ut periculis definiebas vix...";
        vm.image = "images/angularjs-logo.png";

        vm.moreValue = true;
        vm.more = more;

        function more() {
            vm.moreValue = !vm.moreValue;
        }
    }
})();