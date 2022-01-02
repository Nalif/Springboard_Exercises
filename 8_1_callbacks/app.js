const mathFuncs = [add, subtract, multiply, divide, exponent];

function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  return x / y;
}

function exponent(x, y) {
  return x ** y;
}

function allMath(x, y, array) {
  for (let func of array) {
    console.log(func(x, y));
  }
}

const colors = ["teal", "cyan", "blue", "green", "purple"];

colors.forEach(function (val, index, array) {
  console.log(val + index);
});

function myForEach(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    func(arr[i]);
  }
  return undefined;
}

function myMap(arr, callback) {
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    newArr.push(callback(arr[i], i, arr));
  }

  return newArr;
}

const blah = myMap(["a", "b", "c", "d", "e", "f"], function (val, i) {
  return val.repeat(i);
});

//select all checkboxes
const checkedBoxes = document.querySelectorAll("input[type='checkbox']");

//make an array from the node list
const checkBoxArray = Array.from(checkedBoxes);

//make a new array of just the checked ones
const onlyCheckedArray = checkBoxArray.filter((box) => box.checked === true);

const completedItems = onlyCheckedArray.map(function (checkbox) {
  return checkbox.parentElement.innerText;
});

function myFilter(arr, func) {
  const newArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i], i, arr) === true) newArray.push(arr[i]);
  }
  return newArray;
}
