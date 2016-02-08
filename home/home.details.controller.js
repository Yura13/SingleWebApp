(function() {
    'use strict';

    angular.module('app')
        .controller("homeDetailsController", homeDetailsController);

    function homeDetailsController() {
        var vm = this;
        vm.details = "Lorem ipsum dolor sit amet, ut vero erant has, libris equidem est te, ius te agam eruditi. Est cu oratio vivendo, eu enim quidam his. No quod numquam sea, id fabulas tractatos mediocrem duo. Mei ex enim tritani adipisci. Ius nonumes nostrum efficiantur ad, eam ut timeam consequat, harum prompta salutatus te usu. Et erant recteque nec, cu unum soluta duo, ut periculis definiebas vix...";

    }
})();