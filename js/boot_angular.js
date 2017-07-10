var app = angular.module('demo', [])
.controller('WelcomeController', function($scope) {
    $scope.name = '';
});
var elem = document.getElementById("root-ng")
angular.bootstrap(elem, ['demo']);
