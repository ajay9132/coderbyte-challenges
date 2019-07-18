function LetterCapitalize(str) {
 var stringArray = str.split(' ');
 for(i=0;i < stringArray.length; i++){
    var letter = stringArray[i].split('');
    letter[0] = letter[0].toUpperCase();
    stringArray[i] = letter.join('');


 }
 str = stringArray.join(' ');
 console.log(str);
  return str;

}

// keep this function call here
LetterCapitalize("i love my teddy bear");
