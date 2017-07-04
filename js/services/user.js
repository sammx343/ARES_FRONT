angular.module('ares')
.factory('User', ['$http', function TopFactory($http){
  return {
    List: function(){
      return $http({method: 'GET', url: 'http://ares-uninorte.herokuapp.com/api/v1/users'})
    },
    Get : function(id, invites){
      return invites.filter(function(invited){
        return invited.id == id;
      })
    }
  }
}]);