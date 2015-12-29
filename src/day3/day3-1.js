
(function () {
  'use strict';
  
  let angulars = require('./input-3.js').split('');
  //angulars = ['^','v','^','v','^','v','^','v','^','v','^','^','^'];
  let coordinatesList = ['0-0'], currentX = 0, currentY = 0, map = {'v' : () => currentY--, '^': () => currentY++, '>': () => currentX++, '<': () => currentX--};

  angulars.forEach(function(angular) {
    map[angular]();
    if(coordinatesList.indexOf(currentX + '-' + currentY)=== -1){
      coordinatesList.push(currentX + '-' + currentY);
    }
  });
  console.log(coordinatesList.length);
}());
