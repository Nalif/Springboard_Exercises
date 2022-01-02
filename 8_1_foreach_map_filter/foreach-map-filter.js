function doubleValues(arr) {
  const doubledArray = [];
  for (let i = 0; i < arr.length; i++) {
    doubledArray.push(arr[i] * 2);
  }
  return doubledArray;
}

function onlyEvenValues(arr) {
  const evenArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) evenArray.push(arr[i]);
  }
  return evenArray;
}

function showFirstAndLast(arr) {
  const firstLastArray = [];
  for (let i = 0; i < arr.length; i++) {
    const firstLetter = arr[i][0];
    const lastLetter = arr[i][arr[i].length - 1];
    firstLastArray.push(firstLetter + lastLetter);
  }
  return firstLastArray;
}

function addKeyAndValue(arr, key, value) {
  for (let i = 0; i < arr.length; i++) {
    arr[i][key] = value;
  }
  return arr;
}

function vowelCount(str) {
  const lowerCase = str.toLowerCase();
  const vowels = ["a", "e", "i", "o", "u"];
  const resultsObject = {};

  for (let i = 0; i < lowerCase.length; i++) {
    if (vowels.includes(lowerCase[i])) {
      if (resultsObject[lowerCase[i]]) {
        resultsObject[lowerCase[i]]++;
      } else {
        resultsObject[lowerCase[i]] = 1;
      }
    }
  }

  return resultsObject;
}

function doubleValuesWithMap(arr) {
  const doubledArray = [];
  for (let i = 0; i < arr.length; i++) {
    doubledArray.push(arr[i] * 2);
  }
  return doubledArray;
}

function valTimesIndex(arr) {
  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    newArray.push(arr[i] * i);
  }
  return newArray;
}

function extractKey(arr, key) {
  const newArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i][key]) {
      newArray.push(arr[i][key]);
    }
  }

  return newArray;
}

function extractFullName(arr) {
  const newArray = [];

  for (let i = 0; i < arr.length; i++) {
    const firstName = arr[i]["first"];
    const lastName = arr[i]["last"];
    newArray.push(`${firstName} ${lastName}`);
  }

  return newArray;
}

function filterByValue(arr, key) {
  const filtered = arr.filter(function (x) {
    return x[key];
  });
  return filtered;
}

function find(arr, searchValue) {
  const filteredResults = arr.filter((value) => value === searchValue);

  return filteredResults[0];
}

function findInObj(arr, key, searchValue) {
  const filteredResults = arr.filter((value) => value[key] === searchValue);

  return filteredResults[0];
}

function removeVowels(str) {
  const lowerCase = str.toLowerCase();
  const vowels = ["a", "e", "i", "o", "u"];
  let resultsString = "";

  for (let i = 0; i < lowerCase.length; i++) {
    if (!vowels.includes(lowerCase[i])) {
      resultsString += lowerCase[i];
    }
  }

  return resultsString;
}

function doubleOddNumbers(arr) {
  const oddNumbers = arr.filter((value) => value % 2 !== 0);

  return oddNumbers.map((value) => value * 2);
}
