angular.module('ares')
.controller("UserIndexController", ['$scope', '$timeout', 'User', 
  function($scope, $timeout, User){

  $scope.invites = [];
  $scope.th = true;

  var retrieve = function(){
    User.List().then(function(data){
      $scope.invites = data.data;
    });
  }

  $scope.change = function (){
      $scope.th = !$scope.th
      retrieve();
  }

  retrieve();
  //No se toque esta mierda a menos que se esté seguro de lo que se hace
  $scope.exportData = function () {
      var blob = new Blob([document.getElementById('exportable').innerHTML], {
          type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8"
      });
      saveAs(blob, "Report.xls");
  };
}]);