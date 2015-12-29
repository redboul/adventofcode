(function () {
  'use strict';
  
  let input = require('./input-1.js');
  console.log(input.split('').reduce((acc, curr) => (curr === ')')? acc - 1: acc + 1,0));
}());
