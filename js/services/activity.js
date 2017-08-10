angular.module('ares')
.factory('Activity', ['$http', 'URL', function ActivityFactory($http, URL){
  return {
    show : function(id){
      return $http({method: 'GET', url: URL.LINK + "/activities/" + id})
    }
  }
}]);