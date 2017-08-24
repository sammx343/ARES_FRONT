angular.module("ares")
.config(function($routeProvider){
	$routeProvider.when('/' , {
    templateUrl: 'templates/event/index.html',
    controller: 'EventIndexController'
	})
  .when('/users',{
      templateUrl: 'templates/user/index.html',
      controller: 'UserIndexController'
  })
  .when('/users/new',{
      templateUrl: 'templates/user/new.html',
      controller: 'UserCreateController'
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
  .when('/events/edit/:id',{
      templateUrl: 'templates/event/update.html',
      controller: 'EventUpdateController'
  })
  .when('/events/:id/activities/new',{
      templateUrl: 'templates/activity/new.html',
      controller: 'ActivityCreateController'
  })
  .when('/events/:event_id/activities/:id',{
      templateUrl: 'templates/activity/show.html',
      controller: 'ActivitiesShowController'
  })
  .when('/events/:event_id/activities/:id/edit',{
      templateUrl: 'templates/activity/update.html',
      controller: 'ActivitiesUpdateController'
  })
});