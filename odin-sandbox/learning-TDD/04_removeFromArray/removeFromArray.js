const removeFromArray = function (inputArray, ...otherArguments) {
  let argumentsArray = [...otherArguments]
  let argumentsArrayLength = argumentsArray.length


  for (argumentsArrayLength; argumentsArrayLength > 0; argumentsArrayLength--) {
    inputArray = inputArray.filter(item => item !== argumentsArray[argumentsArrayLength - 1])
  }
  return inputArray
};


// Do not edit below this line
module.exports = removeFromArray;
