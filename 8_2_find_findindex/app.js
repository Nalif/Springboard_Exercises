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
