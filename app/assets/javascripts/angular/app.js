angular.module('syncrow.controllers',[]);
var app = angular.module('syncrow', [
	'syncrow.controllers', 
	'ui.router', 
	'templates',
	'ngMaterial'
	]);

app.config(["$httpProvider", function($httpProvider) {
  $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
}]);

app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider){

	$stateProvider
	.state('home',{
		// url: '/home',
		// templateUrl: 'snippets.html',
		controller: 'ApplicationController',
		resolve: {
				currentUser: ['$http',function($http) {
					return $http.get("/api/v1/users/me.json");
        }]
			}
	})
	.state('home.snippets',{
		url: '/home/snippets',
		templateUrl: 'snippets.html',
		controller: 'SnippetsController'
	});

	$urlRouterProvider.otherwise('/home/snippets');
	$locationProvider.html5Mode({
		enabled:true,
		requireBase: false
	});

}]);

// app.controller('applicationController',['$scope', '$http', function($scope, $http){
// 	console.log('App Controller');

// 	$scope.users = [
// 		{name: 'Ankur', age: 35}, 
// 		{name: 'Manish', age: 45}, 
// 		{name: 'Gopal', age: 25}
// 	];

// 	$scope.add = function(user){
// 		$scope.users.push(user);
// 		$scope.user = {};
// 	};

// 	$scope.delete = function(index){
// 		$scope.users.splice(index,1);
// 	}

// 	var getPosts = function(){
// 		$http.get('post/all_posts').then(function(response){
// 			console.log(response);
// 			$scope.posts = response.data;
// 		});
// 	}

// 	$scope.deletePost = function(id){
// 		$http.delete('/posts/'+id).then(function(response){
// 			console.log(response);
// 			// $scope.posts.push(response.data.post);
// 			// $scope.post = {};
// 			// $scope.showNotification('Post Added successfully...');
// 		});
// 	}
// }]);

// app.controller('snippetController',['$scope', '$http', function($scope, $http){
// 	console.log('Snippet Controller');
// 	$scope.post = {};	
// 	$scope.submitForm = function(){
// 		$http.post('/posts', {post: $scope.post}).then(function(response){
// 			console.log(response);
// 			$scope.posts.push(response.data.post);
// 			$scope.post = {};
// 			// $scope.showNotification('Post Added successfully...');
// 		});
// 	}
// }]);