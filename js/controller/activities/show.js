angular.module('ares')
.controller("ActivitiesShowController", ['$scope', '$route', '$routeParams', '$location', 'Activity', 
  function($scope, $route, $routeParams, $location, Activity){

  $scope.activity = {};
  $scope.event_id = $routeParams.event_id;

  Activity.Show($routeParams.id).then(function(data){
    $scope.activity = data.data.activity;
    console.log($scope.activity);
  });

  $scope.deleteActivity = function(){
    swal({
      title: "Estás seguro de querer borrar esta Actividad?",
      text: "La actividad será borrada completamente.",
      type: "warning",
      showCancelButton: true,
      cancelButtonText: "Cancelar",
      confirmButtonClass: "btn-danger",
      confirmButtonText: "Aceptar",
      closeOnConfirm: false
    },
    function(){
      $location.path("/events/" + $scope.event_id);
      $route.reload();
      Activity.Delete($routeParams.id).then(function(data){
        swal({title: "Borrado", 
              text: "La actividad ha sido borrada", 
              type: "success"
            });
      });
    });
  };
}]);