angular.module('hangman.guess', [])
.controller('GuessController', function($scope,$location, Word, State){

  $scope.data = {};
  $scope.data.wrongGuess = "";
  State.game = "ongoing";

  var getSecretWord = function(){
    Word.getData()
     .then(function(word){
       console.log("word",word);
       $scope.data.secretWord = word;
       size = word.length;
       $scope.data.temp = Array.from(Array(size)).fill("_ ");
       displayText();
     })
     .catch(function(err){
       console.log("error: ", err);
     })
  }
  $scope.checkLetter = function(letter){
    var index = $scope.data.secretWord.indexOf(letter);
    if(index >= 0 ) {
      placeLetters(letter);
      displayText();
      checkWinner();
    }else{
      $scope.data.wrongGuess+=` ${letter}`;
      checkGameOver();
    }
    $scope.letter = "";
  }

  var displayText = function(){
    $scope.data.display = $scope.data.temp.join("");
  }

  var checkGameOver = function(){
    var mistakes = $scope.data.wrongGuess.replace(/ /g,"").length;
    if(mistakes === 6){
      State.game = "Game over";
      $location.path('/gameover');
    }
  }

  var checkWinner = function(){
    if( $scope.data.display === $scope.data.secretWord ){
      State.game = "You Win!!!";
      $location.path('/gameover');
    }
  }

  var placeLetters = function(letter){
    var text = $scope.data.secretWord.split("");
    text.forEach(function(char,i){
      if(text[i]===letter){
        console.log("pass",text[i]);
        $scope.data.temp[i] = letter
      }
    });
  }

  getSecretWord();

});
