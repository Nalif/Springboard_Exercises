const myDouble = (arr) => arr.map((val) => val * 2);

const mySquareAndFindEvens = (numbers) => {
  let squares = numbers.map((num) => num ** 2);
  let evens = squares.filter((square) => square % 2 === 0);
  return evens;
};
