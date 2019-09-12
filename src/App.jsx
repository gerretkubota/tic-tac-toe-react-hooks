import React, { useEffect } from 'react';
import Board from './components/Board.jsx';
import Header from './components/Header.jsx';
import Reset from './components/Reset.jsx';

import useBoardState from './hooks/useBoardState.jsx';
// import usePlayerState from './hooks/usePlayerState.jsx';

import '../public/styles/main.css';

const App = () => {
  const {
    moves,
    makeMove,
    player,
    reset,
    checkWinner,
    nextPlayer,
    winner,
  } = useBoardState(new Array(9).fill(''));

  useEffect(() => {
    if (winner) {
      alert(`The winner is ${player}!`);
      reset();
    } else {
      checkWinner(() => nextPlayer());
    }
  }, [winner, moves, player, reset, checkWinner, nextPlayer]);

  return (
    <div className="app column column-center">
      <Header title="Tic Tac Toe" />
      <section className="sub-section row">
        <div>
          <p>Player turn: {player}</p>
        </div>
        <Reset onClick={() => reset()} />
      </section>
      <Board
        moves={moves}
        makeMove={makeMove}
        player={player}
        nextPlayer={nextPlayer}
      />
    </div>
  );
};

export default App;
