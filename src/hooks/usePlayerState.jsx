import { useState } from 'react';

const usePlayerState = initialValue => {
  const [player, setPlayer] = useState(initialValue);

  return {
    player,
    nextPlayer: turn => setPlayer(turn),
  };
};

export default usePlayerState;
