authApp.factory('Auth',
  ['$rootScope', '$firebaseAuth'], ($rootScope, $firebaseAuth) => {
    const ref = firebase.database().ref();
    const auth = $firebaseAuth();

    return {
      login: (user) => {
        $rootScope.message = "Hi " + $rootScope.user.email + "!!!";
      },
      register: user => {
        auth.$createUserWithEmailAndPassword(
          user.email,
          user.password
        ).then( regUser => {
          $rootScope.message = "Hi " + user.firstname + "!!!";
        }).catch( error => {
          $rootScope.message = error.message;
        });
      }
    }

  });
