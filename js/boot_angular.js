angular.module('myApp', [])
  .controller('MyController', ['$scope', function ($scope) {
    $scope.greetMe = '';
  }]);

angular.element(function() {
  angular.bootstrap(document, ['myApp']);
});

$route.reload();
