(function () {
  'use strict';
  
  let parenthesis = require('./input.js').split('');
  let count = 0, index = 0;
  parenthesis.some(function(parenthes) {
    index++;
    count += (parenthes === ')')? - 1:  1;
    return count === -1;
  });
  console.log(index);
}());
