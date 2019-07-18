var input = require('./readline');

function LongestWord(sen) {
    console.log("input: "+ sen);
    sen = sen.replace(/[^a-zA-Zsd1-9]/g, ' ');
    var senArray = sen.split(' ');
    var firstWord = senArray[0];
    senArray.forEach(array => {
        if(array.length > firstWord.length){
            firstWord = array;
        };
    });
    sen = firstWord;
  // code goes here
  console.log(`Answer ${sen}`);
  return sen;

}

// keep this function call here
LongestWord(input.readline);
