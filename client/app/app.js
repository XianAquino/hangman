angular.module('hangman',[
  'hangman.services',
  'hangman.guess',
  'ngRoute'
]).config(function($routeProvider){
  $routeProvider
   .when('/guess', {
     templateUrl: 'app/guess/guess.html',
     controller: 'GuessController'
   })
   .otherwise({
     redirectTo:'/guess'
   })
})
