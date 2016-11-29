angular.module('hangman.guess', [])
.controller('GuessController', function($scope,$location, Word){

  $scope.data = {};
  $scope.data.wrongGuess = "";
  $scope.data.gameState = "ongoing";

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
    }else{
      $scope.data.wrongGuess+=` ${letter}`;
      checkGameState();
    }
    displayText();
    $scope.letter = "";
  }

  var displayText = function(){
    $scope.data.display = $scope.data.temp.join("");
  }

  var checkGameState = function(){
    var mistakes = $scope.data.wrongGuess.replace(/ /g,"").length;
    if(mistakes === 6){
      $scope.data.gameState = "Game over";
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
