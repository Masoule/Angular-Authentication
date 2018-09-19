var authApp = angular.module('auth',['ngRoute']);

authApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/login', {
      templateURL:'views/login.html',
      controller:'AuthController'
    }).
    when('/register', {
      templateURL:'views/register.html',
      controller:'AuthController'
    }).
    when('/success', {
      templateURL:'views/success.html',
      controller:'SuccessController'
    }).
    otherwise({
      redirectTo:'/login',
    });
}]);
