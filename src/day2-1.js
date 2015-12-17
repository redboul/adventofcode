(function () {
  'use strict';
  
  let dimensions = require('./input-2.js').split('\n').map(dimension => dimension.split('x')).filter(dims => dims.length > 2);
  console.log(dimensions);
  let sum = 0;
  dimensions.forEach(dimension => sum += surface(dimension[0], dimension[1], dimension[2]));
 console.log(sum);
  function surface(l, w, h){
    return 2*l*w + 2*l*h + 2*w*h + Math.min(l*w , l*h , w*h);
  }
}());
