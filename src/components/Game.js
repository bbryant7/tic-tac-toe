function calculateWinner(squares) {
  const winningOptions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i = 0; i < winningOptions.length; i++) {
    let [a, b, c] = winningOptions[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return false;
}

// function doesMatch(squares, [a, b, c]) {
//   return squares[a] && squares[a] === squares[b] && squares[a] === squares[c]
// }

// function computerMove(squares) {
//   for (var i = 0; i < winningOptions.length; i++) {
//     if (squares[a] === squares[b]) {
//       // select squares[c] for turn
//     }
//   }
// }

export default calculateWinner;
