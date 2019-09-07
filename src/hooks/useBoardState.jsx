import { useState } from 'react';

const useBoardState = initialValue => {
  const [moves, setMoves] = useState(initialValue);

  return {
    moves,
    makeMove: (index, player) => {
      if (moves[index]) {
        return alert('Choose a different move!');
      }

      console.log(`${index} has been clicked`);

      const newMoves = [...moves];
      newMoves[index] = player;

      setMoves(newMoves);
    },
    reset: newBoard => setMoves(newBoard),
  };
};

export default useBoardState;
