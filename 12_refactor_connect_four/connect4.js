/** Connect Four
 *
 * Player 1 and 2 alternate turns. On each turn, a piece is dropped down a
 * column until a player gets four-in-a-row (horiz, vert, or diag) or until
 * board fills (tie)
 */

class Player {
  constructor(color) {
    this.color = color;
    console.log(this.color);
  }
}

class Game {
  constructor(height, width, player1, player2) {
    this.players = [player1, player2];
    this.height = height;
    this.width = width;
    // this.p1Color = p1Color;
    // this.p2Color = p2Color;
    this.currPlayer = this.players[0];
    this.board = [];
    this.makeBoard();
    this.makeHtmlBoard();
    this.gameOver = false;
  }

  makeBoard() {
    this.board.splice(0, this.board.length); //ensure we always start with an empty array
    for (let y = 0; y < this.height; y++) {
      this.board.push(Array.from({ length: this.width }));
    }
  }

  makeHtmlBoard() {
    const board = document.getElementById("board");
    board.innerHTML = ""; //ensure we always start with an empty board
    // make column tops (clickable area for adding a piece to that column)
    const top = document.createElement("tr");
    top.setAttribute("id", "column-top");

    this.handleGameClick = this.handleClick.bind(this);
    top.addEventListener("click", this.handleGameClick);

    for (let x = 0; x < this.width; x++) {
      const headCell = document.createElement("td");
      headCell.setAttribute("id", x);
      top.append(headCell);
    }

    board.append(top);

    // make main part of board
    for (let y = 0; y < this.height; y++) {
      const row = document.createElement("tr");

      for (let x = 0; x < this.width; x++) {
        const cell = document.createElement("td");
        cell.setAttribute("id", `${y}-${x}`);
        row.append(cell);
      }

      board.append(row);
    }
  }

  findSpotForCol(x) {
    for (let y = this.height - 1; y >= 0; y--) {
      if (!this.board[y][x]) {
        return y;
      }
    }
    return null;
  }

  placeInTable(y, x) {
    const piece = document.createElement("div");
    piece.classList.add("piece");
    piece.style.backgroundColor = this.currPlayer.color;
    piece.style.top = -50 * (y + 2);

    const spot = document.getElementById(`${y}-${x}`);
    if (spot) spot.append(piece);
  }

  endGame(msg) {
    alert(msg);
  }

  handleClick(evt) {
    if (this.gameOver) return; //no clicks if the game is over
    // get x from ID of clicked cell
    const x = +evt.target.id;

    // get next spot in column (if none, ignore click)
    const y = this.findSpotForCol(x);
    if (y === null) {
      return;
    }

    // place piece in board and add to HTML table
    this.board[y][x] = this.currPlayer;
    this.placeInTable(y, x);

    // check for win
    if (this.checkForWin()) {
      return this.endGame(`Player ${this.currPlayer.color} won!`);
    }

    // check for tie
    if (this.board.every((row) => row.every((cell) => cell))) {
      this.gameOver = true;
      return this.endGame("Tie!");
    }

    // switch players

    this.currPlayer =
      this.currPlayer === this.players[0] ? this.players[1] : this.players[0];
  }

  checkForWin() {
    function _win(cells) {
      // Check four cells to see if they're all color of current player
      //  - cells: list of four (y, x) cells
      //  - returns true if all are legal coordinates & all match currPlayer

      return cells.every(
        ([y, x]) =>
          y >= 0 &&
          y < this.height &&
          x >= 0 &&
          x < this.width &&
          this.board[y][x] === this.currPlayer
      );
    }

    const myWin = _win.bind(this); // bind _win function to this object so that it can access instance variables

    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        // get "check list" of 4 cells (starting here) for each of the different
        // ways to win
        const horiz = [
          [y, x],
          [y, x + 1],
          [y, x + 2],
          [y, x + 3],
        ];
        const vert = [
          [y, x],
          [y + 1, x],
          [y + 2, x],
          [y + 3, x],
        ];
        const diagDR = [
          [y, x],
          [y + 1, x + 1],
          [y + 2, x + 2],
          [y + 3, x + 3],
        ];
        const diagDL = [
          [y, x],
          [y + 1, x - 1],
          [y + 2, x - 2],
          [y + 3, x - 3],
        ];

        // find winner (only checking each win-possibility as needed)
        if (myWin(horiz) || myWin(vert) || myWin(diagDR) || myWin(diagDL)) {
          this.gameOver = true;
          return true;
        }
      }
    }
  }
}

const gameWindow = document.getElementById("game");

const button = document.createElement("button");
button.innerText = "New Game";
button.addEventListener("click", () => {
  if (!p1ColorInput.value || !p2ColorInput.value) {
    alert("Specify player colors");
    return;
  }
  new Game(
    6,
    7,
    new Player(p1ColorInput.value),
    new Player(p2ColorInput.value)
  );
});

const p1ColorInput = document.createElement("input");
p1ColorInput.placeholder = "player 1 color";
gameWindow.append(p1ColorInput);

const p2ColorInput = document.createElement("input");
p2ColorInput.placeholder = "player 2 color";
gameWindow.append(p2ColorInput);

gameWindow.append(button);

// const WIDTH = 7;
// const HEIGHT = 6;

// let currPlayer = 1; // active player: 1 or 2
// let board = []; // array of rows, each row is array of cells  (board[y][x])

/** makeBoard: create in-JS board structure:
 *   board = array of rows, each row is array of cells  (board[y][x])
 */

// function makeBoard() {
//   for (let y = 0; y < HEIGHT; y++) {
//     board.push(Array.from({ length: WIDTH }));
//   }
// }

/** makeHtmlBoard: make HTML table and row of column tops. */

/** findSpotForCol: given column x, return top empty y (null if filled) */

/** placeInTable: update DOM to place piece into HTML table of board */

/** endGame: announce game end */

/** handleClick: handle click of column top to play piece */

/** checkForWin: check board cell-by-cell for "does a win start here?" */
