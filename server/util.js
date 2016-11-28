module.exports.pickWord = function(dictionary) {
  var randomIndex = Math.floor(Math.random()*(dictionary.length-0));
  return dictionary[randomIndex];
}
