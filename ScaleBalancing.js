// Challenge
// Have the function ScaleBalancing(strArr) read strArr which will contain two elements, the first being the two positive integer weights on a balance scale (left and right sides) and the second element being a list of available weights as positive integers. Your goal is to determine if you can balance the scale by using the least amount of weights from the list, but using at most only 2 weights. For example: if strArr is ["[5, 9]", "[1, 2, 6, 7]"] then this means there is a balance scale with a weight of 5 on the left side and 9 on the right side. It is in fact possible to balance this scale by adding a 6 to the left side from the list of weights and adding a 2 to the right side. Both scales will now equal 11 and they are perfectly balanced. Your program should return a comma separated string of the weights that were used from the list in ascending order, so for this example your program should return the string 2,6
//
// There will only ever be one unique solution and the list of available weights will not be empty. It is also possible to add two weights to only one side of the scale to balance it. If it is not possible to balance the scale then your program should return the string not possible.
// Sample Test Cases
// Input:["[3, 4]", "[1, 2, 7, 7]"]
//
// Output:"1"
//
//
// Input:["[13, 4]", "[1, 2, 3, 6, 14]"]
//
// Output:"3,6"

function ScaleBalancing(strArr) {

  var toBeBalancedWeights = JSON.parse(strArr[0]);
  console.log(toBeBalancedWeights);
  var leftWeight = toBeBalancedWeights[0];
  var rightWeight = toBeBalancedWeights[1];
  result = [];
  var avaiableWeights = JSON.parse(strArr[1]);
  console.log(`the left weight is ${leftWeight}`);
  console.log(`the right weight is ${rightWeight}`);
  console.log(`the avaiable weights are ${avaiableWeights}`);

  if (leftWeight === rightWeight) {
    console.log(`the weights are by themselves balanced`);
    return 0;
  }else {
    var length = avaiableWeights.length - 1;
    for (var i = length; i >= 0; i--) {
      console.log(`Weight balacing started`);
      console.log(`One weight + iterated available weight ${avaiableWeights[i]} is: ${leftWeight + avaiableWeights[i]}`);
      if (((leftWeight + avaiableWeights[i]) === rightWeight) || ((rightWeight+avaiableWeights[i]) === leftWeight)) {
        console.log(`one weight is sufficient: ${avaiableWeights[i]}`);
        return avaiableWeights[i];
      }else {

        for (var j = 0; j < length ; j++) {
          console.log('double weights checking started');
          if (i !== j) {
            if ((leftWeight + avaiableWeights[i]) === (rightWeight + avaiableWeights[j])) {
              console.log(`left weight + iterated available weight ${avaiableWeights[i]} is: ${leftWeight + avaiableWeights[i]}`);
              console.log(`right weight + iterated available weight ${avaiableWeights[j]} is: ${rightWeight + avaiableWeights[j]}`);
              console.log("Each weight required on both sides!");
              if (result.length === 2) {
                break;
              }
              result.push(avaiableWeights[i]);
              result.push(avaiableWeights[j]);
            }else if (leftWeight === (rightWeight + avaiableWeights[i] + avaiableWeights[j] )) {
              console.log("Two weights required on the right weight!");
              console.log(`left weight + iterated available weight ${avaiableWeights[i]} is: ${leftWeight}`);
              console.log(`right weight + iterated available weight ${avaiableWeights[j]} is: ${rightWeight + avaiableWeights[j] + avaiableWeights[j]}`);
              if (result.length === 2) {
                break;
              }
              result.push(avaiableWeights[i]);
              result.push(avaiableWeights[j]);
            }else if ((leftWeight + avaiableWeights[i] + avaiableWeights[j]) === rightWeight) {
              console.log("Two weights required on the left weight!");
              console.log(`left weight + iterated available weight ${avaiableWeights[i]} is: ${leftWeight + avaiableWeights[i] + avaiableWeights[j]}`);
              console.log(`right weight + iterated available weight ${avaiableWeights[j]} is: ${rightWeight }`);
              if (result.length === 2) {
                break;
              }
              result.push(avaiableWeights[i]);
              result.push(avaiableWeights[j]);
            }
          }
        }
      }
    }
    if (result === undefined || result.length == 0) {
      console.log("not possible!");
      return 'not possible';
    }else {

      result = result.sort(function(a, b){return a-b});
      console.log("Sensational result:" + result.join(','));
      return result.join(',');
    }
  }
}

// keep this function call here
ScaleBalancing(["[6, 2]", "[1, 10, 6, 5]"]);
