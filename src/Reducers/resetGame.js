const initialState = {
  squares: Array(9).fill(null),
  turn: true
};

export default function ResetGameReducer(state = initialState, action) {
  switch (action.type) {
    case "RESTART_GAME":
      console.log("should be reset state", state);
      return initialState;
  }

  console.log("Uninitialized State");
  return state;
}
