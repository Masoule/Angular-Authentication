authApp.controller('AuthController', ['$scope', function($scope) {
  $scope.login = () => {
    $scope.message = "Hi " + $scope.user.email + "!!!";
  };

  $scope.register = () => {
    $scope.message = "Hi " + $scope.user.firstname + "!!!";
  };
}]);
