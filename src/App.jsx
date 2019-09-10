import React, { useEffect } from 'react';
import Board from './components/Board.jsx';
import Header from './components/Header.jsx';
import Reset from './components/Reset.jsx';

import useBoardState from './hooks/useBoardState.jsx';
import usePlayerState from './hooks/usePlayerState.jsx';

import '../public/styles/main.css';

const App = () => {
  const { moves, makeMove, reset, checkWinner, initialClick } = useBoardState(
    new Array(9).fill('')
  );

  useEffect(() => {
    if (initialClick.length) {
      checkWinner();
    }
  }, [initialClick, checkWinner, moves]);

  const { player, nextPlayer } = usePlayerState('X');

  useEffect(() => {
    if (!initialClick.length) {
      nextPlayer('X');
    }
  });

  return (
    <div className="app column column-center">
      <Header title="Tic Tac Toe" />
      <Board
        moves={moves}
        makeMove={makeMove}
        player={player}
        nextPlayer={nextPlayer}
      />
      <Reset
        onClick={() => {
          nextPlayer('X');
          reset();
        }}
      />
    </div>
  );
};

export default App;
