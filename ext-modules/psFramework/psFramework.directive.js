(function () {
  'use strict';

  angular
    .module('psFramework')
    .directive('psFramework', psFramework);

  function psFramework() {
    return {
      restrict: 'AE',
      template: 'test'
    };
  };
})();