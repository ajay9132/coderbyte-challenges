/*
Have the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm. Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a).
Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string.
 */

var input = require('./readline.js');


function LetterChanges(str) {
  var alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var strArray = str.toLowerCase().split('');
  console.log(`input value: ${str}`);
  console.log(`string Array: ${strArray}`);
  for (var j = 0; j < strArray.length; j++) {
    for (var i = 0; i < alphabets.length; i++) {
      var validate = false;
      if (strArray[j] === alphabets[i]) {
        console.log(`Letter before change: ${strArray[j]}`);
        if (strArray[j] === 'z') {
          strArray[j] = 'a';
          validate = true;
        } else {
          strArray[j] = alphabets[i + 1];
          validate = true;
        }
        if ((strArray[j] === 'a') || (strArray[j] === 'e') || (strArray[j] === 'i') || (strArray[j] === 'o') || (strArray[j] === 'u')) {
          strArray[j] = strArray[j].toUpperCase();
          console.log(`changed letter value: ${strArray[j]}`);
          break;
        }else if (validate === true) {
          console.log(`changed letter value: ${strArray[j]}`);
          break;
        }
      }
    }
  }
  str = strArray.join('');
  console.log(`The changed letters word is: ${str}` );
  console.log(str[i].charCodeAt(0) - 5);
  // code goes here
  return str;

}


// function LetterChanges(str) {
//
//   str = str.trim().toLowerCase();
//   var len = str.length;
//   var newStr = '';
//
//   for (var i = 0; i < len; i++) {
//     if (/[a-ce-gi-mo-su-y]/.test(str[i])) {
//     	newStr += String.fromCharCode(((str[i].charCodeAt(0) - 18) % 26) + 97)
//     }
//     else if (/[zdhnt]/.test(str[i])) {
//       	newStr += String.fromCharCode(((str[i].charCodeAt(0) - 18) % 26) + 65);
//     }
//     else {
//      newStr += str[i];
//     }
//   }
// 	return newStr;
//
// }

// keep this function call here
LetterChanges(input.readline);
