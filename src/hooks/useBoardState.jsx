import { useState } from 'react';

const useBoardState = initialValue => {
  const [moves, setMoves] = useState(initialValue);
  const [player, setPlayer] = useState('X');
  const [winner, setWinner] = useState(false);

  return {
    moves,
    player,
    winner,
    makeMove: index => {
      if (moves[index]) {
        return alert('Choose a different move!');
      }

      const newMoves = [...moves];
      newMoves[index] = player;

      setMoves(newMoves);
    },
    nextPlayer: () => {
      const next = player === 'X' ? 'O' : 'X';
      setPlayer(next);
    },
    checkWinner: callback => {
      const possibilities = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];

      for (let i = 0; i < possibilities.length; i += 1) {
        const [a, b, c] = possibilities[i];

        if (moves[a] && moves[a] === moves[b] && moves[a] === moves[c]) {
          setWinner(true);
          setMoves(initialValue);
          callback();
          return;
        }
      }
    },
    checkDraw: () => {
      for (let i = 0; i < moves.length; i += 1) {
        if (moves[i] === '') {
          return false;
        }
      }

      return true;
    },
    reset: () => {
      setMoves(initialValue);
      setPlayer('X');
      setWinner(false);
    },
  };
};

export default useBoardState;
