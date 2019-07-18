function FirstFactorial(num) {

  // code goes here
  var factorial = num;
  for(var i = 1; i < factorial; i++){
      num = num * (factorial-i);
      // console.log("value of i:" + i);
      // console.log("factorial:" + factorial);
      // console.log(`num:  ${num}`);
  }
  console.log(num);
  return num;

}

// keep this function call here
FirstFactorial(5);
