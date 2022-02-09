function createInstructor(firstName, lastName) {
  return {
    firstName,
    lastName,
  };
}

let favoriteNumber = 42234;

const instructor = {
  firstName: "Colt",
  [favoriteNumber]: "That is my favorite!",
};

const instructor2 = {
  firstName: "Colt",
  sayHi() {
    return "Hi!";
  },
  sayBye() {
    return this.firstName + " says bye!";
  },
};

function createAnimal(species, verb, noise) {
  return 5 + 3;
}

function randomNum() {
  return Math.floor(Math.random(0, 9));
}
