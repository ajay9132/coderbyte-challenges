// Have the function TimeConvert(num) take the num parameter being passed and return the number of hours and minutes the parameter converts to (ie. if num = 63 then the output should be 1:3). Separate the number of hours and minutes with a colon.




function TimeConvert(num) {
    var minutes = num%60;
    var hours = (num-minutes)/60;
  // code goes here
  return hours + ":" + minutes;

}

// keep this function call here
TimeConvert(75);
