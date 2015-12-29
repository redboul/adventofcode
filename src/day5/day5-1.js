(function () {
  'use strict';
  
  let words = require('./input.js').split('\n').filter(vowels).filter(twiceInARow).filter(forbiddenWords);
  console.log(words, words.length);
  function vowels(word){
    return word.match(/[aeiuo].*[aeiou].*[aeiou]/);
  }
  function forbiddenWords(word){
    return !word.match(/(ab)|(cd)|(pq)|(xy)/);
  }
  function followInARow(word){
    let formerLetterCode,
      result = word.split('').filter(function(letter){
      try {
        return letter.charCodeAt(0) === formerLetterCode;
      } finally {
        formerLetterCode = letter.charCodeAt(0) + 1;
      }
    });
    console.log(result);
    return !result.length;
  }
  function twiceInARow(word){
    let formerLetter;
    return word.split('').filter(function(letter){
      try {
        return letter === formerLetter;
      } finally {
        formerLetter = letter;
      }
    }).length;
  }
}());
