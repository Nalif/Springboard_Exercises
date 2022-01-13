function filterOutOdds(...nums) {
  return nums.filter((num) => num % 2 === 0);
}

function findMin(...nums) {
  return Math.min(...nums);
}

function mergeObjects(obj1, obj2) {
  return { ...obj1, ...obj2 };
}

function doubleAndReturnArgs(array, ...args) {
  return [...array, ...args.map((num) => num * 2)];
}

const removeRandom = (items) => {
  const randomNum = Math.floor(Math.random() * items.length);
  return [...items.slice(0, randomNum), ...items.slice(randomNum + 1)];
};

const extend = (array1, array2) => [...array1, ...array2];

const addKeyVal = (obj, key, val) => {
  const myObj = { ...obj };
  myObj[key] = val;
  return myObj;
};

const removeKey = (obj, key) => {
  const myObj = { ...obj };
  delete myObj[key];
  return myObj;
};

const combine = (obj1, obj2) => ({ ...obj1, ...obj2 });

const update = (obj, key, val) => {
  const myObj = { ...obj };
  myObj[key] = val;
  return myObj;
};
