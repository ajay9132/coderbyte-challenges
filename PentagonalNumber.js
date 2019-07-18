function PentagonalNumber(num) {
  var addValue = 0;
  var numberValue = 0;
    if (num === 1) {
      return 1;
    }else if (num === 2) {
      return num * 3;
    }else {
      addValue = 2;
      numberValue = 2;
      for (var i = 2; i < num; i++) {
        addValue += 3;
        numberValue += addValue;
      }
      console.log(numberValue);
      num = (num*num) + numberValue;
      console.log(num);
      return num;
    }


/*-------------------------------------------------------------*/
// function PentagonalNumber(num) {
// 	return num === 1 ? 1 : PentagonalNumber(num - 1) + (5 * (num - 1));
// }

// function PentagonalNumber(num) { 
//     let totalDots = 1;
//     for (let i = 1; i <= num; i++) {
//         totalDots += ((i-2)*5 + 5);
//     }
//     return totalDots;
// }
//
}

// keep this function call here
PentagonalNumber(10);
