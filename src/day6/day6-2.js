(function () {
  'use strict';
  function initArray(array){
    for(let i = 0; i<1000;i++){
      array.push([]);
      for(let j = 0; j<1000;j++){
        array[i].push(0);
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
      grid[x][y] = grid[x][y] + 2;
    },
    turnon(x,y){
      grid[x][y] = grid[x][y] + 1;
    },
    turnoff(x,y){
      grid[x][y] = Math.max(grid[x][y] - 1, 0);
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
    let brightness = 0;
    for(let i = 0; i<1000;i++){
      for(let j = 0; j<1000;j++){
        brightness+=array[i][j];
      }
    }
    return brightness;
  }
  console.log(countSwitchOnLight(grid));
}());
