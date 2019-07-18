// Have the function AlphabetSoup(str) take the str string parameter being passed and return the string with the letters in alphabetical order (ie. hello becomes ehllo). Assume numbers and punctuation symbols will not be included in the string.
// Sample Test Cases
// Input:"coderbyte"
//
// Output:bcdeeorty
//
//
// Input:"hooplah"
//
// Output:ahhloop


function AlphabetSoup(str) {

  str = str.toLowerCase().split('').sort().join('');

  return str;

}

// keep this function call here
AlphabetSoup('hooplah');
