// Have the function Palindrome(str) take the str parameter being passed and return the string true if the parameter is a palindrome, (the string is the same forward as it is backward) otherwise return the string false. For example: "racecar" is also "racecar" backwards. Punctuation and numbers will not be part of the string.
// Sample Test Cases
// Input:"never odd or even"
//
// Output:true
//
//
// Input:"eye"
//
// Output:true


// function Palindrome(str) { 
//
//     str = str.replace(/ /g, '');
//
//     for (let i = 0, max = Math.floor(str.length/2); i < max; i++) {
//         if (str[i] !== str[str.length-1-i]) {
//             return false;
//         }
//     }
//     return true;
//
// }
//
//
// function Palindrome(str) {
//   modified = str.replace(/W/g,"");
//
//   var arr1 = modified.split("");
//   var arr2 = arr1;
//   arr2 = arr2.reverse();
//   str2 = arr2.join("");
//
//   return modified == str2;
//
// }


function Palindrome(str) {

var reverseString = str.split('').reverse().join('');
console.log(`the original string is: ${str}`);
console.log(`the reverse string is: ${reverseString}`);

    strArray  = str.split(' ');
    reversestrArray  = reverseString.split(' ');
    console.log(`original string  array is  ${strArray}`);
    console.log(`reverseString array is ${reversestrArray}`);
    var missingletters = 0;
    var nextWord = '';
    var requiredLetters = '';
    newArray = [];
    for (var i = 0; i < strArray.length; i++) {
      if (strArray[i].length >= reversestrArray[i].length)  {
        console.log(`original string is lengthy`);
        console.log(`original word is ${strArray[i]}`);
        console.log(`reverseString word is ${reversestrArray[i]}`);
        missingletters = strArray[i].length - reversestrArray[i].length;
        if (strArray[i] === reversestrArray[i]) {
          newArray.push(reversestrArray[i]);
          break;
        }else {
          nextWord = reversestrArray[i+1];
          requiredLetters = nextWord.substring(0,missingletters);
          reversestrArray[i] = reversestrArray[i]+requiredLetters;
          reversestrArray[i+1] = nextWord.substring(missingletters);
        }
        console.log(`nextWord : ${nextWord}`);

        newArray.push(reversestrArray[i]);
        console.log(`new array  : ${newArray}`);
        console.log(`changed word  : ${reversestrArray[i]}`);
        console.log(`requiredLetters : ${requiredLetters}`);
        console.log(`next changed word : ${reversestrArray[i+1]}`);
        console.log(`missingletters : ${missingletters}`);
      }else if (strArray[i].length <= reversestrArray[i].length) {
        console.log(`reverseString is lengthy`);
        console.log(`original word is ${strArray[i]}`);
        console.log(`reverseString word is ${reversestrArray[i]}`);
        missingletters =  reversestrArray[i].length - strArray[i].length;


        if (strArray[i] === reversestrArray[i]) {
          newArray.push(reversestrArray[i]);
          break;
        }else {
          var newWordForReducing =  reversestrArray[i].substring(0,missingletters+1);
          var afterWord =  reversestrArray[i].substring((missingletters+1),reversestrArray[i].length);
          nextWord = reversestrArray[i+1];
          requiredLetters = nextWord.substring(0,missingletters);
          reversestrArray[i] = reversestrArray[i]+requiredLetters;
          reversestrArray[i+1] = afterWord;
        }
        console.log(`afterWord: ${afterWord}`);
        console.log(`new word has been modified: ${newWordForReducing}` );
        console.log(`nextWord : ${nextWord}`);

        newArray.push(reversestrArray[i]);
        console.log(`new array  : ${newArray}`);
        console.log(`changed word  : ${reversestrArray[i]}`);
        console.log(`requiredLetters : ${requiredLetters}`);
        console.log(`next changed word : ${reversestrArray[i+1]}`);
        console.log(`missingletters : ${missingletters}`);
      }else {
        break;
      }

}

console.log(`new array formed is : ${newArray}`);
reverseString = newArray.join(' ');
console.log(`new reverseString is : ${reverseString}`);
if(str === reverseString ){
  console.log('success!!');
  return true;
}else {
  console.log('failure!!');
  return false;
}


}

// keep this function call here
Palindrome("do geese see god");
