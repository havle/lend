'use strict';

angular.module('lendApp', ['firebase'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/register',{
        templateUrl:'views/registration.html',
        controller: 'registrationCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .run(['angularFireAuth', 'Firebase', 'FBURL', '$rootScope', function(angularFireAuth, Firebase, FBURL, $rootScope) {
      angularFireAuth.initialize(new Firebase(FBURL), {scope: $rootScope, name: "auth", path: '/register'});
      $rootScope.FBURL = FBURL;
   }]);
