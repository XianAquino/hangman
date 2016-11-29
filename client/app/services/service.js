angular.module('hangman.services', [])
.factory('Word', function($http){
  return {
    getData : function(){
      return $http({
        method:'GET',
        url:'http://localhost:3010/secretWord'
      }).then(function(res){
        return res.data;
      });
    }
  }
})
.factory('State', function(){
  return {
    game:""
  }
})
