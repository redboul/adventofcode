(function () {
  'use strict';
  let md5 = require('md5'),
    input = 'yzbqklnj',
    counter = 0;
  while(!md5(input + counter).match('^00000')) {
    counter++;
  }
  console.log(counter, md5(input + counter));
}());
