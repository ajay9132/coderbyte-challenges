function RunLength(str) {

strArray = [];
var usedWords = '';
   console.log(`str lenght is ${str.length}`);
   var wordNumber = 0;
     var counter = 0;
    for (var j = 0; j < str.length; j++) {
      console.log( `value in i(${wordNumber}): ${str[wordNumber]} is equal to: ${str[wordNumber]}`);
      console.log( `value in j(${j}): ${str[j]} is equal to: ${str[j]}`);
      if(str[wordNumber] === str[j]){
          console.log( `counter before increment: ${counter}`);
          if (j === (str.length-1) && (counter === 1)) {
            strArray.push(counter + str[wordNumber]);
            counter = 0;
          }
          counter++;
          console.log( `counter inside if: ${counter}`);
     }else {
         console.log(strArray);
         strArray.push(counter + str[wordNumber]);
         counter = 0;
         wordNumber = j;
         console.log(`value of i: ${wordNumber}`);
     }
     if (counter === 1) {
       console.log('counter is zero');
       strArray.push(counter + str[j]);
     }
     console.log(`value of j: ${j}`);
      usedWords = usedWords + str[wordNumber];
      console.log(`usedWords list is ${usedWords}`);
    }
    console.log(strArray);
    return strArray.join('');
}

// keep this function call here
RunLength("wwwbbbw");
