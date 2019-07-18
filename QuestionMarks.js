// Have the function QuestionsMarks(str) take the str string parameter, which will contain single digit numbers, letters, and question marks, and check if there are exactly 3 question marks between every pair of two numbers that add up to 10. If so, then your program should return the string true, otherwise it should return the string false. If there aren't any two numbers that add up to 10 in the string, then your program should return false as well.
//
// For example: if str is "arrb6???4xxbl5???eee5" then your program should return true because there are exactly 3 question marks between 6 and 4, and 3 question marks between 5 and 5 at the end of the string.
// Sample Test Cases
// Input:"aa6?9"
//
// Output:false
//
//
// Input:"acc?7??sss?3rr1??????5"
//
// Output:true


/*-------------------------------------------------------------------------------*/
function QuestionsMarks(str) {
  var stringArray = str.split('');
  var numberArray = [];
  var addCounter = 0;

  for (var i = 0; i < stringArray.length; i++) {
    var parsedValue = parseInt(stringArray[i]);

    console.log(`The string value ${stringArray[i]} is converted to ${parsedValue}`);
    console.log(`type of parsed integer value is ${typeof(parsedValue)}`);

    if (!(isNaN(parsedValue))) {
      numberArray.push(i);
      console.log(numberArray);
    }
  }

    console.log(`final array is ${numberArray} with a length of ${numberArray.length}`);
    var length = numberArray.length - 1;
    console.log(`the length of the number of arrays in the number is ${length}`);
    var returnValue = false;

  for (var i = length; i > 0; i--) {
    console.log(`iterations = ${i}`);
    firstNumber = parseInt(stringArray[numberArray[i]]);
    secondNumber = parseInt(stringArray[numberArray[i - 1]]);
    console.log(`first number is: ${firstNumber} and the second number is ${secondNumber}`);

    if ((firstNumber + secondNumber) === 10) {

      var substring = str.substring(numberArray[i], numberArray[i - 1]).split('');
      console.log(`text between the numbers: ${substring}`);
      var noOfQuestions = 0;
      for (var j = 0; j < substring.length; j++) {
        if (substring[j] === '?') {
          noOfQuestions += 1;
        }
      }
      if (noOfQuestions === 3) {
        returnValue = true;
      }
      else {
          console.log(`the number adds up to 10 but does not have 3 question marks in between`);
          return false;
      }
    } else {
      returnValue = false;
    }
  }
    if (returnValue === false) {
      console.log(`none of the numbers add up to 10`);
    }else {
      console.log(`Successful addition!!!`);
    }
  return returnValue;
}

// keep this function call here
QuestionsMarks("6??aaaaaaaaaaaaaaaaaaa?4?6");
