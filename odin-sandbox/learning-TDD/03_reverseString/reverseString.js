const reverseString = function (inputString) {
  let output = ''
  let stringLength = inputString.length - 1
  for (stringLength; stringLength >= 0; stringLength--) {
    output += inputString[stringLength]
  }
  return output
};

// Do not edit below this line
module.exports = reverseString;
