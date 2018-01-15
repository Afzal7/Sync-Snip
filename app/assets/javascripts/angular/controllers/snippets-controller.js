var syncrowControllerModule = angular.module('syncrow.controllers');

var SnippetsController = function($scope, $http, currentUser, $mdDialog, $mdToast) {
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
			if (response.data.success == true){
				$scope.current_user.snippets.splice(index,1);
				$scope.showAlert('Snippet deleted successfully!');
			} else {
				$scope.showAlert('An error occured in deleting the snippet!');
			}
		});
	}

	$scope.showConfirm = function(ev, index) {
    // Appending dialog to document.body to cover sidenav in docs app
    var confirm = $mdDialog.confirm()
          .title('Are you sure you want to delete this snippet?')
          .textContent('The snippet still has to be manually deleted from your system.')
          .ariaLabel('Lucky day')
          .targetEvent(ev)
          .ok("Yes, I'm sure")
          .cancel('Cancel');

    $mdDialog.show(confirm).then(function() {
    	console.log(index)
      $scope.deleteSnippet(index);
    }, function() {
      // $scope.status = 'You decided to keep your debt.';
    });
  };

  $scope.showAlert = function(message){
  	$mdToast.show(
      $mdToast.simple()
        .textContent(message)
        .theme('primary')
        .position('bottom right')
        .hideDelay(3000)
  	);
  }


};

syncrowControllerModule.controller('SnippetsController', [ '$scope', '$http', 'currentUser', '$mdDialog', '$mdToast', SnippetsController]);