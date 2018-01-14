var syncrowControllerModule = angular.module('syncrow.controllers');

var SnippetsController = function($scope, $http, currentUser) {
	console.log('Snippets controller');
	$scope.current_user = currentUser.data;

	// $scope.current_user.snippets_attributes = [{name: 'second', content: 'Testing 2'}];

	$scope.createSnippet = function(){
		$http.put('/api/v1/users/'+$scope.current_user.id, {user: $scope.current_user}).then(function(response){
			console.log(response);
		});
	}

	$scope.deleteSnippet = function(index){
		$scope.current_user.snippets_attributes = []
		$scope.current_user.snippets[index]._destroy = true;
		$scope.current_user.snippets_attributes.push($scope.current_user.snippets[index])
		$http.put('/api/v1/users/'+$scope.current_user.id, {user: $scope.current_user}).then(function(response){
			console.log(response);
		});
	}

};

syncrowControllerModule.controller('SnippetsController', [ '$scope', '$http', 'currentUser', SnippetsController]);