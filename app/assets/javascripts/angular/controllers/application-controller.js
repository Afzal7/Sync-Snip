var syncrowControllerModule = angular.module('syncrow.controllers');

var ApplicationController = function(, currentUser) {
	console.log('Application controller');
	console.log(currentUser)
};

syncrowControllerModule.controller('ApplicationController', [ '', 'currentUser', ApplicationController]);