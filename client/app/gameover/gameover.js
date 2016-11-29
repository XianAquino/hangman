angular.module('hangman.gameover', ['hangman.guess'])
.controller('GameOverController', function($scope,$location,State){

  $scope.gameState = State.game;
  
  $scope.playAgain = function(){
    $location.path('/guess');
  }

})
