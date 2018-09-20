authApp.controller('AuthController',
                  ['$scope', '$firebase', '$firebaseAuth',
                  function($scope, $firebase, $firebaseAuth) {

  const ref = firebase.database().ref();
  const auth = $firebaseAuth();
  $scope.login = () => {
    $scope.message = "Hi " + $scope.user.email + "!!!";
  };

  $scope.register = () => {
    auth.$createUserWithEmailAndPassword(
      $scope.user.email,
      $scope.user.password
    ).then( regUser => {
      $scope.message = "Hi " + $scope.user.firstname + "!!!";
    }).catch( error => {
      $scope.message = error.message;
    });
  };
}]);
