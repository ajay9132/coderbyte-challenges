// Have the function SimpleSymbols(str) take the str parameter being passed and determine if it is an acceptable sequence by either returning the string true or false. The str parameter will be composed of + and = symbols with several letters between them (ie. ++d+===+c++==a) and for the string to be true each letter must be surrounded by a + symbol. So the string to the left would be false. The string will not be empty and will have at least one letter.
// Sample Test Cases
// Input:"+d+=3=+s+"
//
// Output:true
//
//
// Input:"f++d+"
//
// Output:false

function SimpleSymbols(str) {
  var alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var stringArray = str.trim().split('');
  var noOfAlphabets = 0;
  var validAlphabets = 0;
  for (var i = 0; i < stringArray.length; i++) {
    for (j = 0; j < alphabets.length; j++) {
      if (stringArray[i] === alphabets[j]) {
        noOfAlphabets += 1;
        if ((stringArray[i - 1] === '+') && (stringArray[i + 1] === '+')) {
          validAlphabets += 1;
          continue;
        } else {
          break;
        }
      }
    }
  }
  if (noOfAlphabets === validAlphabets) {
    str = 'true';
  }else{
    str = 'false';
  }
  return str;
}

// keep this function call here
SimpleSymbols("+f++d+");
