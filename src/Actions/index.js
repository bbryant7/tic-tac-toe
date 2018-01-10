export function myTurn() {
  return {
    type: "MY_TURN"
  };
}

export function squares(i, move) {
  return {
    type: "SQUARES",
    i,
    move
  };
}

export function restartGame() {
  console.log("restartAction", "you in here?");
  return {
    type: "RESTART_GAME"
  };
}

export function computersMove(i, move) {
  return {
    type: "COMPUTERS_MOVE",
    i,
    move
  };
}
