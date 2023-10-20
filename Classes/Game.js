class Game {
  constructor(rows, cols, initialState = null) {
    this.rows = rows;
    this.cols = cols;
    this.state = initialState == null ? new State(rows, cols) : initialState;
    this.currentPlayer = Players.MAX;
  }

  getActions(state) {
    const actions = [];
    for (let i = 0; i < this.cols; i++) {
      if (state.board[0][i] === 0) {
        actions.push(new Action(i));
      }
    }
    return actions;
  }

  getResult(state, action) {
    const newState = state.getCopy();
    for (let i = 0; i < this.rows; i++) {
      if (newState.board[i][action.column] === 0) {
        newState.board[i][action.column] = this.currentPlayer.id;
        break;
      }
    }
    return newState;
  }

  setState(state) {
    this.state = state;
  }

  switchPlayer() {
    this.currentPlayer =
      this.currentPlayer.id === Players.MAX.id ? Players.MIN : Players.MAX;
  }

  isTerminal(state) {
    return true;
  }

  getUtility(state) {
    return 0;
  }
}
