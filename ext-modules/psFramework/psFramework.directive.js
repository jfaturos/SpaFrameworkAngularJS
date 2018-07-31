(function() {
    'use strict';

    angular
        .module('psFramework')
        .directive('psFramework', psFramework);

    function psFramework() {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            transclude: false,
            // bindToController: true,
            // controller: ControllerController,
            // controllerAs: 'vm',
            // replace: true,
            replace: true,
            link: link,
            restrict: 'E',
            scope: {
            },
            template: '<h1>hello world</h1>'
            // templateUrl: 'ext-modules/psFramework/psFramework.html'
        };
        return directive;
        
        function link(scope, element, attrs) {
        }
    }
    
})();