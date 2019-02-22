module.exports = function getZerosCount(number, base) {
  // your implementation
  var divider = Math.floor(number / maxDivide(base)),
  result = divider;

  while (divider > 0) {
    divider = Math.floor(divider / maxDivide(base));
    result += divider;
  }

  return result;

  function maxDivider(num) {
    for (var i = 3; i < num; i++) {
      if (num % i == 0 && simpleDigit(i)) {
        return i;
      }
    }
  }

  function simpleDigit(num) {
    for (var i = 2; i < num; i++) {
      if (num % i == 0) {
        return false;
      }
    }
    return true;
  }
}