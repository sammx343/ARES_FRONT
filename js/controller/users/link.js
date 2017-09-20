angular.module('ares')
.controller("UserLinkController", ['$scope', '$routeParams', 'User', 'Activity', 'Event',
  function($scope, $routeParams, User, Activity, Event){

  $scope.user = {};
  $scope.activities = [];
  $scope.selectedEvent = true;
  $scope.event = [];

  User.Show($routeParams.id).then(function(data){
    $scope.user = data.data.user;
    console.log($scope.user);
  });

  Event.List().then(function(data){
    $scope.events = data.data;
    console.log($scope.events);
  });

  $scope.getEvent = function(event){
    $scope.selectedEvent = false;
    console.log(event);
    Event.Show(event.id).then(function(data){
      $scope.event = data.data.event;
    });
  }

  $scope.addActivity = function(activity){
    var index;
    var addActivity;

    $scope.activities.forEach(function mapActivity(act, number){
      if(act.id == activity.id){
        addActivity = true;
        index = number;
      }
    });

    if(!addActivity){
      $scope.activities.push(activity);
    }else{
      $scope.activities.splice(index, 1);
    }
  }

  $scope.sendLinkActivities = function(){
    var userActivities = [];

    $scope.activities.forEach(function mapUsers(activity, index){
      var user_activity = {
        "user_id" : $routeParams.id,
        "activity_id": activity.id
      }
      userActivities.push(user_activity);
    });
    console.log(userActivities);
    Activity.AddUser(userActivities).then(
      function success(data){
        swal({title: "Actividades Enlazadas", 
          type: "success"
        });
        $location.path("/users/" + $routeParams.id);
        $route.reload();
    },function error(response) {
      console.log(response);
      swal({title: "Hubo un error agregando " + response.config.data.user_activity.length + " usuarios", 
        type: "error"
      });
    });
  }

  $scope.cancelEventSelection = function(){
    $scope.selectedEvent = true;
  }

}]);