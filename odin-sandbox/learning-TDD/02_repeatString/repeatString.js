const repeatString = function (word, repeatTimes) {
  let output = ''
  if (repeatTimes >= 0) {
    for (i = 0; repeatTimes > i; i++) {
      output += word
    }
  } else {
    output = "ERROR"
  }

  return output
};

// Do not edit below this line
module.exports = repeatString;
