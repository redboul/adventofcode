(function () {
  'use strict';
  
  let input = require('./input.js');
  console.log(input.split('').reduce((acc, curr) => (curr === ')')? acc - 1: acc + 1,0));
}());
