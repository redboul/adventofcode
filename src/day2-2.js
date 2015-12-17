(function () {
  'use strict';
  
  let dimensions = require('./input-2.js').split('\n').map(dimension => dimension.split('x')).filter(dims => dims.length > 2);
  console.log(dimensions);
  let sum = 0;
  //dimensions = [['2','2','2'], ['4','3','2'], ['10','1','1']];
  dimensions.forEach(dimension => sum += bowLength(+dimension[0], +dimension[1], +dimension[2]));
  console.log(sum);
  function bowLength(l, w, h){
    let smallestSides = [l, w, h];
    smallestSides.splice(smallestSides.indexOf(Math.max(l,w,h)), 1); 
    console.log(smallestSides);
    if(smallestSides.length !== 2) throw 'not 2 arguments into array' + smallestSides;
    return l*w*h + smallestSides.reduce((acc, curr) => 2*curr + acc, 0);
  }
}());
