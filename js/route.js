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
  .when('/events',{
      templateUrl: 'templates/event/index.html',
      controller: 'EventIndexController'
  })
  .when('/events/new',{
      templateUrl: 'templates/event/new.html',
      controller: 'EventCreateController'
  })
  .when('/events/:id',{
      templateUrl: 'templates/event/show.html',
      controller: 'EventShowController'
  })
  .when('/activities/:id',{
      templateUrl: 'templates/activity/show.html',
      controller: 'ActivitiesShowController'
  })
  .when('/activities/:id',{
      templateUrl: 'templates/activity/show.html',
      controller: 'ActivitiesShowController'
  })
});