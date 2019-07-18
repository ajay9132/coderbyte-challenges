// Challenge
// Have the function ExOh(str) take the str parameter being passed and return the string true if there is an equal number of x's and o's, otherwise return the string false. Only these two letters will be entered in the string, no punctuation or numbers. For example: if str is "xooxxxxooxo" then the output should return false because there are 6 x's and 5 o's.
// Sample Test Cases
// Input:"xooxxo"
//
// Output:true
//
//
// Input:"x"
//
// Output:false



function ExOh(str) {

    var x = 0;
    var o = 0;
    for(i=0;i<str.length;i++){
     if(str[i] === 'x'){
         ++x;
     }else if(str[i] === 'o'){
         ++o;
     }
 }

 if( x === o){ return true; }else{return false;}

}

// keep this function call here
ExOh(readline());
