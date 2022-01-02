const numbers = [2, 4, 6, 8];

function hasOddNumber(arr) {
  return arr.some(function (element) {
    return element % 2 !== 0;
  });
}

function hasAZero(number) {
  const numString = number.toString();

  if (numString.indexOf("0") !== -1) return true;
  else return false;
}

function hasOnlyOddNumbers(array) {
  return array.every(function (element) {
    return element % 2 > 0;
  });
}

function hasNoDuplicates(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i], i + 1) !== -1) return false;
  }
  return true;
}

function hasCertainKey(arr, key) {
  return arr.every(function (element) {
    return element[key];
  });
}

function hasCertainValue(arr, key, value) {
  return arr.every(function (element) {
    return element[key] === value;
  });
}
