const initialState = {
  squares: Array(9).fill(null),
  turn: true
};

export default function squaresReducer(state = initialState, action) {
  switch (action.type) {
    case "SQUARES":
      let currentBoard = state.squares.slice();
      action.move = "O";

      currentBoard[action.i] = action.move;

      return Object.assign({}, state, { squares: currentBoard });

    case "RESTART_GAME":
      return initialState;

    case "COMPUTERS_MOVE":
      currentBoard = state.squares.slice();
      action.move = "X";
      if (currentBoard.includes("X")) {
        currentBoard[2] = action.move;
        return Object.assign({}, state, { squares: currentBoard });
      } else {
        currentBoard[1] = action.move;
        return Object.assign({}, state, { squares: currentBoard });
      }
  }
  return state;
}
