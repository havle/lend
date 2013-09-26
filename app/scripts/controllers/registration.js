'use strict';

angular.module('lendApp')
	.controller('registrationCtrl', ['$scope','loginService' ,function ($scope, loginService) {

		$scope.userName = null
		$scope.userPass = null
		$scope.$on('angularFireAuth:error', function(evt, args){
			alert("something")
			console.log(args)
		})
		$scope.register = function (){
			loginService.createAccount($scope.userName, $scope.userPass)
		}
	}])