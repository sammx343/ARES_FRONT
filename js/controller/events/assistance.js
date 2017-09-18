angular.module('ares')
.controller("EventAssistanceController", ['$scope', '$route' ,'$routeParams', '$location', 'Event', 'User', 'NgTableParams',
function($scope, $route ,$routeParams, $location, Event, User, NgTableParams){

  $scope.event = {};
  $scope.usersToAdd = [];

  Event.Show($routeParams.id).then(function(data){
    $scope.event = data.data.event;
    console.log($scope.event);

    
    $scope.tp = new NgTableParams({ count: 10 }, { counts: [5, 10, 20], dataset: $scope.event.user_events});
  });
}]);