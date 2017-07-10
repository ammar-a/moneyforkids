angular.module('myApp', [])
  .controller('MyController', ['$scope', function ($scope) {
}]);
angular.element(function() {
      angular.bootstrap(document, ['myApp']);
});
