angular.module("ares")
.config(function($routeProvider){
	$routeProvider.when('/', {
		templateUrl: 'templates/list-user.html',
		controller: 'ListUserController'
	})
    .when('/list/:id',{
        templateUrl: 'templates/card.html',
        controller: 'CardController'
    })
});