var authApp = angular.module('auth',['ngRoute', 'firebase']);

authApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/login', {
      templateUrl:'views/login.html',
      controller:'AuthController'
    }).
    when('/register', {
      templateUrl:'views/register.html',
      controller:'AuthController'
    }).
    when('/success', {
      templateUrl:'views/success.html',
      controller:'SuccessController'
    }).
    otherwise({
      redirectTo:'/login',
    });
}]);
