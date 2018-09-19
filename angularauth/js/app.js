var authApp = angular.module('auth',[]);

authApp.controller('appController',['$scope', function($scope) {
  $scope.message = 'hello from outer space';
}])
