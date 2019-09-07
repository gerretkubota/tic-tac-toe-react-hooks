import { useState } from 'react';

const useBoardState = initialValue => {
  const [moves, setMoves] = useState(initialValue);

  return {
    moves,
    player: 'X',
    makeMove: (index, player) => {
      if (moves[index]) {
        return alert('Choose a different move!');
      }

      console.log(`${index} has been clicked`);

      const newMoves = [...moves];
      newMoves[index] = index;

      setMoves(newMoves);
    },
    reset: newBoard => setMoves(newBoard),
  };
};

export default useBoardState;
