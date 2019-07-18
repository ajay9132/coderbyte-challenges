// Have the function KaprekarsConstant(num) take the num parameter being passed which will be a 4-digit number with at least two distinct digits. Your program should perform the following routine on the number: Arrange the digits in descending order and in ascending order (adding zeroes to fit it to a 4-digit number), and subtract the smaller number from the bigger number. Then repeat the previous step. Performing this routine will always cause you to reach a fixed number: 6174. Then performing the routine on 6174 will always give you 6174 (7641 - 1467 = 6174). Your program should return the number of times this routine must be performed until 6174 is reached. For example: if num is 3524 your program should return 3 because of the following steps: (1) 5432 - 2345 = 3087, (2) 8730 - 0378 = 8352, (3) 8532 - 2358 = 6174.
//
// Hard challenges are worth 15 points and you are not timed for them.
// Sample Test Cases
// Input:2111
//
// Output:5
//
//
// Input:9831
//
// Output:7


function KaprekarsConstant(num) {

  var result = 0;
  var iteration = 0;

  while(result !== 6174 ){
    stringArray = num.toString();
    if (stringArray.length === 1) {
      stringArray = stringArray + '000';
    }
    if (stringArray.length === 2) {
      stringArray = stringArray + '00';
    }
    if (stringArray.length === 3) {
      stringArray = stringArray + '0';
    }
    ascnumArray = [];
    desnumArray = [];
    for (var i = 0; i < stringArray.length; i += 1) {
      ascnumArray.push(+stringArray.charAt(i));
      desnumArray.push(+stringArray.charAt(i));
    };
      var ascNumber = ascnumArray.sort(function(a, b) {
        return a - b
      }).join('');

      var desNumber = desnumArray.sort(function(a, b) {
        return b - a
      }).join('');

      result = desNumber - ascNumber;

      iteration += 1;
      console.log(`descending number ${desNumber} - ascending numbers ${ascNumber} : ${result}`);
      console.log(iteration);
      num = result;
    }
    return iteration;
  }

  /*------------------Recursive Function to do the same------------------------------*/
  // But the test cases for coderbyte will fail this method.
  // var stringArray = '';
  // var iteration = 0;
  // if (typeof(num) !== 'number') {
  //   var values = num.split(':');
  //
  //   stringArray = values[0].toString();
  //   iteration = parseInt(values[1], 10);
  // } else {
  //   stringArray = num.toString();
  //   iteration = 0;
  // }
  // console.log(stringArray);
  // console.log(iteration);
  //
  // ascnumArray = [];
  // desnumArray = [];
  // for (var i = 0; i < stringArray.length; i += 1) {
  //   ascnumArray.push(+stringArray.charAt(i));
  //   desnumArray.push(+stringArray.charAt(i));
  // }
  // var ascNumber = ascnumArray.sort(function(a, b) {
  //   return a - b
  // }).join('');
  //
  // var desNumber = desnumArray.sort(function(a, b) {
  //   return b - a
  // }).join('');
  // var result = desNumber - ascNumber;
  // iteration += 1;
  // console.log(`descending number ${desNumber} - ascending numbers ${ascNumber} : ${result}`);
  // console.log(iteration);
  // if (result === 6174) {
  //   console.log(iteration);
  //   return iteration;
  // } else {
  //   KaprekarsConstant(result + ':' + iteration);
  // }
// }

/*---------------------------------------------Another solution by rank 1 guy-----------------*/
// function KaprekarsConstant(num) {
//     const KAP = 6174;
//     var count = 0;
//     while (true) {
//         var num = evaluator(num)
//         if (num === true) {
//             return count;
//         }
//     }
//
//     function evaluator(num) {
//         count++
//         console.log('count', count);
//         var minNumArr = num.toString().split('').sort();
//         var maxNumArr = minNumArr.slice(0).reverse();
//         var littleNum = parseInt(minNumArr.join(''), 10);
//         var bigNum = parseInt(maxNumArr.join(''), 10);
//         while (bigNum < 1000) {
//             bigNum = bigNum * 10;
//         }
//
//         return bigNum - littleNum === KAP ? true : bigNum - littleNum;
//     }
// }

// keep this function call here
KaprekarsConstant(2111);
