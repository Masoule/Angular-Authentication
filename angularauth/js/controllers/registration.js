authApp.controller('AuthController',
                  ['$scope', 'Auth',
                  ($scope, Auth) => {

  $scope.login = () => {
    Auth.login($scope.user);
  };

  $scope.register = () => {
    Auth.register($scope.user);
  };
}]);
