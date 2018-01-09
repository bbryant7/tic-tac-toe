const initialState = {
  squares: Array(9).fill(null),
  turn: true
};

export default function squaresReducer(state = initialState, action) {
  switch (action.type) {
    case "SQUARES":
      let currentBoard = state.squares.slice();

      currentBoard[action.i] = action.move;

      return Object.assign({}, state, { squares: currentBoard });

    case "RESTART_GAME":
      return initialState;
  }
  return state;
}
