const sumAll = function (min, max) {

  let isPositive = (min > 0 && max > 0)
  let isNumbers = (Number.isInteger(min) && Number.isInteger(max))

  if (isPositive && isNumbers) {
    if (min > max) {
      let realMax = min
      let realMin = max
      min = realMin
      max = realMax
    }
    let sum = 0
    for (i = min; max >= i; i++) {
      sum += i;
    }
    return sum
  } else {
    return "ERROR"
  }
}
// Do not edit below this line
module.exports = sumAll;
