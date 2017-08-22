angular.module('ares')
.controller("UserIndexController", ['$scope', '$timeout', 'User', 
  function($scope, $timeout, User){

  $scope.invites = [];
  $scope.th = true;

  $scope.sessions = [0,0,0];

  var retrieve = function(){
    User.List().then(function(data){
      $scope.sessions = [0,0,0];
      $scope.invites = data.data;

      for(var i = 0; i< $scope.invites.length; i++){

        var act = $scope.invites[i].activities;

        for(var j = 0; j< act.length; j++ ){

          if(act[j].assisted == 1){
            $scope.sessions[j] = $scope.sessions[j] + 1;
          }
        }      
      }
    });
    
    /*f($scope.th){
      $timeout(retrieve, 5000);
    }*/
    //console.log("finish");
    console.log($scope.sessions[0] + " " + $scope.sessions[1] + " " + $scope.sessions[2]);
  }

  $scope.change = function (){
      $scope.th = !$scope.th
      retrieve();
  }

  retrieve();

  $scope.exportData = function () {
      var blob = new Blob([document.getElementById('exportable').innerHTML], {
          type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8"
      });
      saveAs(blob, "Report.xls");
  };
}]);