export default function AppReducer(state, action) {
  if (state === undefined) {
    return {
      state: false
    };
  }

  switch (action.type) {
    case "IS_COMPUTERS_TURN":
      return { state: !state };
  }
  return state;
}
