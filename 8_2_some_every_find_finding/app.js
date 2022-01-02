const words = [
  "immunoelectrophoretically",
  "rotavator",
  "tsktsk",
  "psychophysicotherapeutics",
  "squirrelled",
  "crypt",
  "uncopyrightable",
  "cysts",
  "psuedoseudohypoparathyroidism",
  "unimaginatively",
];

words.some(function (val) {
  return val.length > 10;
});

words.some(function (element, index, array) {
  return array.indexOf("rotavator") !== -1;
});
// asdf

words.every(function (element, index, array) {
  return element.length > 10;
});

function allStrings(arr) {
  return arr.every(function (element) {
    return typeof element === "string";
  });
}

const btn = document.querySelector("button");

btn.addEventListener("click", function (event) {
  event.preventDefault();

  const checkboxes = document.querySelectorAll("input[type=checkbox]");

  const checkArray = Array.from(checkboxes);

  const allChecked = checkArray.every(function (element) {
    return element.checked;
  });

  if (!allChecked) {
    alert("Please agree to everything");
  }
});

function mySome(arr, callback) {
  for (const element of arr) {
    if (callback(element) === true) {
      return true;
    }
  }
  return false;
}

function myEvery(arr, callback) {
  for (const element of arr) {
    if (!callback(element)) return false;
  }
  return true;
}
