angular.module('ares')
.factory('User', ['$http',  'URL', function UserFactory($http, URL){
  return {
    List: function(){
      return $http({method: 'GET', url: URL.LINK + "/users"})
    },
    Get : function(id, invites){
      return invites.filter(function(invited){
        return invited.id == id;
      })
    },
    Create : function(user){
      return $http({method: 'POST', url: URL.LINK + "/users", data: {user}})
    }
  }
}]);