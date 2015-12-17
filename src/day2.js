(function () {
  'use strict';
  
  let dimensions = require('./input-2.js').split('\n').map(dimension => dimension.split('x')).filter(dims => dims.length > 2);
  console.log(dimensions);
}());
