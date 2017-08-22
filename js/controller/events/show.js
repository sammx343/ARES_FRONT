angular.module('ares')
.controller("EventShowController", ['$scope', '$route', '$routeParams', '$location', 'Event', 
function($scope, $route, $routeParams, $location, Event, URL){

  console.log($routeParams.id);
  $scope.event = {}
  Event.Show($routeParams.id).then(function(data){
    $scope.event = data.data.event;
  });

  $scope.deleteEvent = function(){
    swal({
      title: "Estás seguro de querer borrar este evento?",
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
      Event.Delete($routeParams.id).then(function(data){
        swal({title: "Borrado", 
              text: "El evento ha sido borrado", 
              type: "success"
            });
      });
    });
  };
}]);