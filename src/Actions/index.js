export function myTurn() {
  return {
    type: "MY_TURN"
  };
}

export function squares() {
  return {
    type: "SQUARES"
  };
}

export function restartGame() {
  return {
    type: "RESTART_GAME"
  };
}
