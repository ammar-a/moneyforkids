angular.module('myApp', [])
  .controller('MyController', ['$scope', function ($scope) {
    $scope.greetMe = 'World';
  }]);
angular.element(function() {
      angular.bootstrap(document, ['myApp']);
});
