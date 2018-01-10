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

function calculateWinner(squares) {
  for (let i = 0; i < winningOptions.length; i++) {
    let [a, b, c] = winningOptions[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return false;
}
//
// function computersMove(squares) {
//   for (let i = 0; i < winningOptions.length; i++) {
//     let [a, b, c] = winningOptions[i];
//     if (squares[a] === squares[b] && squares[c] === null) {
//       return squares[c];
//     } else if (squares[a] === squares[c] && squares[b] === null) {
//       return squares[b];
//     } else if (squares[b] === squares[c] && squares[a] === null) {
//       return squares[a];
//     }
//   }
//   return;
// }

export default calculateWinner;
