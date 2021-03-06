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
  .when('/users/:id',{
      templateUrl: 'templates/user/show.html',
      controller: 'UserShowController'
  })
  .when('/users/:id/edit',{
      templateUrl: 'templates/user/update.html',
      controller: 'UserUpdateController'
  })
  .when('/users/:id/link',{
      templateUrl: 'templates/user/link.html',
      controller: 'UserLinkController'
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
  .when('/events/:id/users',{
      templateUrl: 'templates/event/addUsers.html',
      controller: 'EventUsersController'
  })
  .when('/events/:id/asistencia',{
      templateUrl: 'templates/event/assistance.html',
      controller: 'EventAssistanceController'
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
  .when('/events/:event_id/activities/:id/users',{
      templateUrl: 'templates/activity/users.html',
      controller: 'ActivityAddUsersController'
  })
});