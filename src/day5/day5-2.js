(function () {
  'use strict';
  
  let words = require('./input.js').split('\n').filter(twicePair).filter(letterInsidePair);
  console.log(words, words.length);
  function twicePair(word){
    return word.match(/(\w\w).*\1/);
  }
  function letterInsidePair(word){
    return word.match(/(\w)\w\1/);
  }
}());
