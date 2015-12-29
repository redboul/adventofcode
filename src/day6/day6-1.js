(function () {
  'use strict';
  function initArray(array){
    for(let i = 0; i<1000;i++){
      array.push([]);
      for(let j = 0; j<1000;j++){
        array[i].push(false);
      }
    }
    return array;
  }
  let instructions = require('./input.js').split('\n').map(instruction => instruction.split(' ')),
    grid = initArray([]);
  function setLight(x1, y1, x2, y2, action){
    for(let i = x1; i<=x2;i++){
      for(let j = y1; j<=y2;j++){
        action(i,j); 
      }
    }
  }
  let actions = {
    toggle(x,y){
      grid[x][y] = !grid[x][y];
    },
    turnon(x,y){
      grid[x][y] = true;
    },
    turnoff(x,y){
      grid[x][y] = false;
    }
  };
  instructions.forEach(instruction => {
    let x1y1 = instruction[instruction.length - 3].split(',').map(Number);
    let x2y2 = instruction[instruction.length - 1].split(',').map(Number);
    if(instruction[0] === 'toggle'){
      setLight(x1y1[0], x1y1[1], x2y2[0], x2y2[1], actions.toggle);
    } else {
      setLight(x1y1[0], x1y1[1], x2y2[0], x2y2[1], actions[instruction[0] + instruction[1]]);
    }
  });
  function countSwitchOnLight(array){
    let count = 0;
    for(let i = 0; i<1000;i++){
      for(let j = 0; j<1000;j++){
        if (array[i][j]) { count++; }
      }
    }
    return count;
  }
  console.log(countSwitchOnLight(grid));
}());
