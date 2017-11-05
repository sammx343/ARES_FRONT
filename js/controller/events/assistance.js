angular.module('ares')
.controller("EventAssistanceController", ['$scope', '$route' ,'$routeParams', '$location', 'Event', 'User', 'NgTableParams',
function($scope, $route ,$routeParams, $location, Event, User, NgTableParams){

  $scope.event = {};
  $scope.usersToExcel = [];// Array para exportar a excel

  $scope.exportData = function () {//Esto genera el reporte
    alasql('SELECT * INTO XLSX("reporte.xlsx",{headers:true}) FROM ?',[$scope.usersToExcel]);
  }; //No tocar, excepto cuando se quiera cambiar el nombre al reporte

  Event.Show($routeParams.id).then(function(data){
    $scope.event = data.data.event;

    var userLength = $scope.event.user_events.length;

    $scope.event.user_events.forEach(function userEvent(user_event, number){
      var tempUser = user_event.user; //Variable temporal, usada por comodidad
      var tempActivities = tempUser.activities;
      var user = {//Usuario para agregar al array para exportar a excel
        Nombre : tempUser.names,
        Apellido: tempUser.surnames,
        Correo : tempUser.email,
        Identificación : tempUser.identification
      }
      tempActivities.forEach(function MapActivities(activity){
        user[activity.name] = (activity.assisted)? activity.assisted : 0;
      });
      $scope.usersToExcel.push(user);
    });

    $scope.tp = new NgTableParams({ count: 10 }, { counts: [5, 10, userLength], dataset: $scope.event.user_events});
  });
}]);