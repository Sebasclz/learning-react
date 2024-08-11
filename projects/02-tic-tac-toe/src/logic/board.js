import { WINNER_COMBOS } from '../constants.js';
import confetti from 'canvas-confetti';
import { TURNS } from '../constants.js';
import { resetGameStorage } from '../logic/storage/index.js';

export const checkWinnerFrom = (boardToCheck) => {
  for (const winnerCombo of WINNER_COMBOS) {
    const [a, b, c] = winnerCombo;
    if (
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c]
    ) {
      return boardToCheck[a];
    }
  }
  return null;
};

export const checkEndGame = (newBoard) => {
  return newBoard.every((square) => square !== null);
};

export const updateBoard = (
  index,
  board,
  turn,
  setBoard,
  setTurn,
  setWinner,
  winner
) => {
  if (board[index] || winner) {
    return;
  }

  const newBoard = [...board];
  newBoard[index] = turn;
  setBoard(newBoard);

  const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
  setTurn(newTurn);

  const newWinner = checkWinnerFrom(newBoard);

  if (newWinner) {
    confetti();
    setWinner(newWinner);
  } else if (checkEndGame(newBoard)) {
    setWinner(false);
  }
};

export const resetGame = (setBoard, setTurn, setWinner, board) => {
  const checkResetBoard = [...board].every((i) => i === null);

  if (checkResetBoard) {
    return;
  }

  setBoard(Array(9).fill(null));
  setTurn(TURNS.X);
  setWinner(null);

  resetGameStorage();
};
