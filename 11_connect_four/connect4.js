/** Connect Four
 *
 * Player 1 and 2 alternate turns. On each turn, a piece is dropped down a
 * column until a player gets four-in-a-row (horiz, vert, or diag) or until
 * board fills (tie)
 */

const width = 7;
const height = 6;

let currPlayer = 1; // active player: 1 or 2. 1 = red, 2 = blue
const board = []; // array of rows, each row is array of cells  (board[y][x])

function makeBoard() {
  board.splice(0, board.length); //ensure we're starting with an empty board
  for (let y = 0; y < height; y++) {
    //if we're at the end of the row, create a new array for the next row
    if (y % height === 0);
    {
      board.push([]);
    }
    //initialize each board square to null
    for (let x = 0; x < width; x++) {
      board[y][x] = null;
    }
  }
}

/** makeHtmlBoard: make HTML table and row of column tops. */
function makeHtmlBoard() {
  const htmlBoard = document.getElementById("board");
  htmlBoard.innerHTML = ""; // ensure we're starting with an empty board

  // make column topper, set each square clickable, set the X coord as ID
  const top = document.createElement("tr");
  top.setAttribute("id", "column-top");
  top.addEventListener("click", handleClick);

  for (let x = 0; x < width; x++) {
    const headCell = document.createElement("td");
    headCell.setAttribute("id", x);
    top.append(headCell);
  }
  htmlBoard.append(top);

  // create the board, ID each square with its y,x coords
  for (let y = 0; y < height; y++) {
    const row = document.createElement("tr");

    for (let x = 0; x < width; x++) {
      const cell = document.createElement("td");
      cell.setAttribute("id", `${y}-${x}`);
      row.append(cell);
    }
    htmlBoard.append(row);
  }
}

/** findSpotForCol: given column x, return top empty y (null if filled) */
// 0 1 2 3 4 5 6
// 1
// 2
// 3
// 4
// 5
function findSpotForCol(x) {
  //check for empty squares starting at the bottom
  for (let y = height - 1; y >= 0; y--) {
    //if the square is empty, return it
    if (board[y][x] === null) {
      return y;
    }
  }
  return null;
}

/** placeInTable: update DOM to place piece into HTML table of board */
function placeInTable(y, x) {
  const square = document.getElementById(`${y}-${x}`);
  const piece = document.createElement("div");

  //if the current player is 1, piece is blue. Else, piece is red
  currPlayer === 1
    ? piece.classList.add("piece", "p1")
    : piece.classList.add("piece", "p2");

  square.append(piece);
}

/** endGame: announce game end */
function endGame(msg) {
  alert(msg);
}

/** handleClick: handle click of column top to play piece */
function handleClick(evt) {
  //reset the board if the game is over
  if (checkForWin()) {
    makeBoard();
    makeHtmlBoard();
  }

  // get x from ID of clicked cell
  const x = +evt.target.id;

  // get next spot in column (if none, ignore click)
  const y = findSpotForCol(x);
  if (y === null) {
    return;
  }

  // place piece in board and add to HTML table
  placeInTable(y, x);
  board[y][x] = currPlayer;

  // check for win
  if (checkForWin()) {
    return endGame(`Player ${currPlayer} won!`);
  }

  // check for tie
  const isFilled = (currentSquare) => currentSquare !== null;
  if (board.every((row) => row.every(isFilled))) {
    return endGame(`Tie!`);
  }
  // switch players
  currPlayer = currPlayer === 1 ? 2 : 1;
}

/** checkForWin: check board cell-by-cell for "does a win start here?" */

function checkForWin() {
  function _win(cells) {
    // Check four cells to see if they're all color of current player
    //  - cells: list of four (y, x) cells
    //  - returns true if all are legal coordinates & all match currPlayer

    //I don't understand how this works :(
    //wait, I think I get it now. _win takes in an array of arrays. Each sub-array is a [y,x] coordinate.
    return cells.every(
      (
        [y, x] //here, we destruct each element into a y and x number
      ) =>
        //and then for every y,x pair, we check to make sure it is inside the bounds of our board and we check to see if it belongs to the current player. If all of that is true, true is returned and the game is won
        y >= 0 &&
        y < height &&
        x >= 0 &&
        x < width &&
        board[y][x] === currPlayer
    );
  }

  //loop through every row
  for (let y = 0; y < height; y++) {
    //loop through every square in current
    for (let x = 0; x < width; x++) {
      //define the horizontal win condition
      const horiz = [
        [y, x],
        [y, x + 1],
        [y, x + 2],
        [y, x + 3],
      ];
      //define the vertical condition
      const vert = [
        [y, x],
        [y + 1, x],
        [y + 2, x],
        [y + 3, x],
      ];
      // x 1 2 3 4 5 6
      // 1 x
      // 2   x
      // 3     x
      // 4
      // 5
      //define the diag down-right win condition
      const diagDR = [
        [y, x],
        [y + 1, x + 1],
        [y + 2, x + 2],
        [y + 3, x + 3],
      ];
      // 0 1 2 x 4 5 6
      // 1   x
      // 2 x
      // x
      // 4
      // 5
      //define the diag down-left win condition
      const diagDL = [
        [y, x],
        [y + 1, x - 1],
        [y + 2, x - 2],
        [y + 3, x - 3],
      ];

      //if any of our win condition definitions are true, return true
      if (_win(horiz) || _win(vert) || _win(diagDR) || _win(diagDL)) {
        return true;
      }
    }
  }
}

makeBoard(width, height);
makeHtmlBoard();
