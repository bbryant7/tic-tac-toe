export default function squaresReducer(
  state = [null, null, null, null, null, null, null, null, null],
  action
) {
  switch (action.type) {
    case "SQUARES":
      return state;
  }
  return state;
}
