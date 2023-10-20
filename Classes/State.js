class State {
  board = [];

  constructor(rows, cols) {
    this.emptyBoard(rows, cols);
  }

  emptyBoard(rows, cols) {
    this.board = [];
    for (let i = 0; i < rows; i++) {
      this.board[i] = [];
      for (let j = 0; j < cols; j++) {
        this.board[i][j] = 0;
      }
    }
  }

  randomBoard(rows, cols) {
    this.emptyBoard(rows, cols);
    for (let i = 0; i < rows * cols; i++) {
      this.board[Math.floor(Math.random() * rows)][
        Math.floor(Math.random() * cols)
      ] = Math.random() < 0.5 ? Players.MAX.id : Players.MIN.id;
    }
  }

  getCopy() {
    const newState = new State();
    newState.board = this.board.map((row) => row.slice());
    return newState;
  }
}
