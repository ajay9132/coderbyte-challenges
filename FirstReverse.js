var input = require('./readline.js');

function FirstReverse(str) {
  stringArray = str.split('');
  stringArray =  stringArray.reverse();
  str = stringArray.join('');

  // let newString = '';
  // for (let i = str.length-1; i >= 0; i--) {
  //     newString += str[i];
  // }
  // return newString;

  return str;



}

// keep this function call here
FirstReverse(input.readline);
