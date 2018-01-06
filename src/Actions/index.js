export const MY_TURN = "MY_TURN";
export const SQUARES = "SQUARES";

export function myTurn() {
  return {
    type: MY_TURN
  };
}

export function squares() {
  return {
    type: SQUARES
  };
}
