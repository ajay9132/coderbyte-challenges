// Challenge
// Have the function ABCheck(str) take the str parameter being passed and return the string true if the characters a and b are separated by exactly 3 places anywhere in the string at least once (ie. "lane borrowed" would result in true because there is exactly three characters between a and b). Otherwise return the string false.
// Sample Test Cases
// Input:"after badly"
//
// Output:false
//
//
// Input:"Laura sobs"
//
// Output:true


function ABCheck(str) {

  console.log(str);
  console.log(str.includes('a','b'));
  var alphabetA = [];
  var alphabetB = [];
  for (var i = 0; i < str.length; i++) {
    if (str[i] === 'a') {
      alphabetA.push(i);
    }else if (str[i] === 'b') {
      alphabetB.push(i);
    }
  }

  console.log(alphabetA);
  console.log(alphabetB);

  for (var i = 0; i < alphabetA.length; i++) {
    for (var j = 0; j < alphabetB.length; j++) {
      console.log(alphabetB[j] - alphabetA[i] );
      if (((alphabetB[j] - alphabetA[i] ) === 4) || ((alphabetB[j] - alphabetA[i] ) === -4)) {
        console.log("Success!");
        return true;
      }else{
        continue;
      }
    }
  }
  console.log("Failure!");
  return false;

}

// keep this function call here
ABCheck("Laura sobs");


// 1. For the input "123advb" your output was incorrect. The correct answer is false.
// 2. For the input "123adzvb" your output was incorrect. The correct answer is true.
// 3. For the input "abccccazzzb" your output was incorrect. The correct answer is true.
// 4. For the input "bzzza" your output was incorrect. The correct answer is true.
