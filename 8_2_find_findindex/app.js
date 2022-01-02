const scores = [0, 0, 0, 0, 0, 55, 59, 69, 73, 73, 75, 79, 83, 88, 91, 93];

scores.find(function (score) {
  return score > 75;
});

function myFind(array, callback) {
  for (const value of array) {
    if (callback(value)) {
      return value;
    }
  }
  return undefined;
}

function myFindIndex(array, callback) {
  for (const value of array) {
    if (callback(value)) {
      return array.indexOf(value);
    }
  }
  return -1;
}

const users = [
  { username: "mlewis", blah: "blahblah" },
  { username: "akagen" },
  { username: "msmith" },
];

function findUserByUsername(array, string) {
  return array.find(function (object) {
    return object["username"] === string;
  });
}

function removeUser(array, string) {
  const userIndex = array.findIndex(function (object) {
    return object["username"] === string;
  });
  if (userIndex === -1) return;
  return array.splice(userIndex, 1)[0];
}
