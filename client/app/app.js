angular.module('hangman',[
  'hangman.services',
  'hangman.guess',
  'hangman.gameover',
  'ngRoute'
]).config(function($routeProvider){
  $routeProvider
   .when('/guess', {
     templateUrl: 'app/guess/guess.html',
     controller: 'GuessController'
   })
   .when('/gameover',{
     templateUrl: 'app/gameover/gameover.html',
     controller: 'GameOverController'
   })
   .otherwise({
     redirectTo:'/guess'
   })
})
