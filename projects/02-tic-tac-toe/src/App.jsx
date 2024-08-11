import { useEffect, useState } from 'react';
import { TURNS } from './constants.js';
import { updateBoard, resetGame } from './logic/board.js';
import { WinnerModal } from './components/WinnerModal.jsx';
import { Turn } from './components/Turn.jsx';
import { Game } from './components/Game.jsx';
import { saveGameStorage } from './logic/storage/index.js';

function App () {
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board');
    return boardFromStorage
      ? JSON.parse(boardFromStorage)
      : Array(9).fill(null);
  });

  
  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn');
    return turnFromStorage ?? TURNS.X;
  });
  
  const [winner, setWinner] = useState(null);
  

  useEffect(() => {
    if (board.every((n) => n === null)) {
      return;
    }

    saveGameStorage({ board: [...board], turn: turn });
  }, [board, turn]);

  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>

      <button onClick={() => resetGame(setBoard, setTurn, setWinner, board)}>Reiniciar partida</button>

      <Game board={board} turn={turn} updateBoard={(index) =>
        updateBoard(index, board, turn, setBoard, setTurn, setWinner, winner)
      } />

      <Turn turn={turn} />

      <WinnerModal resetGame={() => resetGame(setBoard, setTurn, setWinner, board)} winner={winner} />
    </main>
  );
}

export default App;
