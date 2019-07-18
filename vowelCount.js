function VowelCount(str) {


 var count = 0;
 for(i=0;i<str.length;i++){
     if((str[i] === 'a') || (str[i] === 'e') || (str[i] === 'i') || (str[i] === 'o') || (str[i] === 'u')){
         ++count;
     }
 }
  return count;

}

// keep this function call here
VowelCount('Hello World');
