export default function myTurnReducer(state = true, action) {
  switch (action.type) {
    case "MY_TURN":
      return (state = !state);
  }
  return state;
}
