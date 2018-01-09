const initialState = {
  squares: Array(9).fill(null)
};

export default function squaresReducer(state = initialState, action) {
  switch (action.type) {
    case "SQUARES":
      return state;
  }
  return state;
}
