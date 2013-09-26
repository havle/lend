'use strict';

angular.module('lendApp')
  .controller('MainCtrl', ['$scope','FBURL', 'Firebase', 'angularFireCollection', 'loginService' ,function ($scope, FBURL, Firebase, angularFireCollection, loginService) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.newMessage = null;
    $scope.messages = angularFireCollection(new Firebase(FBURL + '/messages').limit(10));

    $scope.addMessage = function(){
    	$scope.messages.add({text: $scope.newMessage});
    	$scope.newMessage = null;
    }

    $scope.remove = function(toRemove){
    	$scope.status = "removing " + toRemove.text;
    	if(toRemove != null)
    	{
    		$scope.messages.remove(toRemove);
    	}
    }

    $scope.login = function(){
    	// log("Logging in")
    	loginService.login($scope.userName, $scope.userPass, null, alert("Failed"));
    }

    $scope.createAccount = function(){
    	
    }
  }]);
