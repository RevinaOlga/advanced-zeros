module.exports = function getZerosCount(number, base) {
  // your implementation

  var arr = divider(base);

  var divide = Math.floor(number / arr[arr.length - 1]);
  var sum = divide;
  var i = 2;
  
  while (divide > 0) {
    divide = Math.floor(number / Math.pow(arr[arr.length - 1], i));
    sum += divide;
    i++;
  }

  return Math.floor(sum/powerDigit(base, arr[arr.length - 1]));

  function powerDigit(num, prime) {
    var i = 0; 
    while (num % prime == 0) {
        num = num / prime;
        i++;
    }
    return i;
  }

  function divider(num) {
    var arr = [];
    for (var i = 2; i <= num; i++) {
        if (num % i == 0 && simpleDigit(i)) {
            arr.push(i);
        }
    }
    return arr;
  }

  function simpleDigit(num) {
    for (var i = 2; i < num -1; i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
  }
}