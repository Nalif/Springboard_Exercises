function extractValue(array, searchKey) {
  return array.reduce(function (nameAcc, nextObject) {
    nameAcc.push(nextObject[searchKey]);
    return nameAcc;
  }, []);
}

function vowelCount(string) {
  const lowerCaseString = string.toLowerCase();
  const letterArray = lowerCaseString.split("");
  const vowels = "aeiou";

  return letterArray.reduce(function (accum, nextValue) {
    // if the current value is a vowel
    if (vowels.indexOf(nextValue) !== -1) {
      accum[nextValue] ? accum[nextValue]++ : (accum[nextValue] = 1);
    }
    return accum;
  }, {});
}

function addKeyAndValue(objectArr, key, value) {
  return objectArr.reduce(function (accum, nextObj, index) {
    accum[index][key] = value;
    return accum;
  }, arr);
}

function partition(array, callback) {
  return array.reduce(
    function (accum, nextValue) {
      callback(nextValue) ? accum[0].push(nextValue) : accum[1].push(nextValue);
      return accum;
    },
    [[], []]
  );
}
