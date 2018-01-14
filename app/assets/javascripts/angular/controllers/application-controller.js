var syncrowControllerModule = angular.module('syncrow.controllers');

var ApplicationController = function($scope, currentUser) {
	console.log('Application controller');
	console.log(currentUser)
};

syncrowControllerModule.controller('ApplicationController', [ '$scope', 'currentUser', ApplicationController]);