import { useState } from 'react';

const useBoardState = initialValue => {
  const [moves, setMoves] = useState(initialValue);

  const [initialClick, setClick] = useState('');

  return {
    moves,
    initialClick,
    makeMove: (index, player) => {
      if (moves[index]) {
        return alert('Choose a different move!');
      }

      console.log(`${index} has been clicked`);

      const newMoves = [...moves];
      newMoves[index] = player;

      setMoves(newMoves);

      if (!initialClick.length) {
        setClick(player);
      }
    },
    checkWinner: () => {
      console.log('checking winner');

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
          alert(`The winner is ${moves[a]}`);
          setMoves(initialValue);
          setClick('');
        }
      }
    },
    reset: () => {
      setMoves(initialValue);
      setClick('');
    },
  };
};

export default useBoardState;
