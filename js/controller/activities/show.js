angular.module('ares')
.controller("ActivitiesShowController", ['$scope', '$route', '$routeParams', '$location', 'Activity', function($scope, $routeParams, Activity){

  $scope.activity = {};
  console.log($routeParams.event_id);

  Activity.Show($routeParams.id).then(function(data){
    $scope.activity = data.data.activity;
  });

  $scope.deleteActivity = function(){
    swal({
      title: "Estás seguro de querer borrar esta Actividad?",
      text: "El evento será borrado, junto con todas las actividades que este poséa",
      type: "warning",
      showCancelButton: true,
      cancelButtonText: "Cancelar",
      confirmButtonClass: "btn-danger",
      confirmButtonText: "Aceptar",
      closeOnConfirm: false
    },
    function(){
      $location.path("/events");
      $route.reload();
      Activity.Delete($routeParams.id).then(function(data){
        swal({title: "Borrado", 
              text: "La actividad ha sido borrado", 
              type: "success"
            });
      });
    });
  };
}]);