import React from 'react';

import Square from './Square.jsx';

import useBoardState from '../hooks/useBoardState.jsx';
import usePlayerState from '../hooks/usePlayerState.jsx';

const Board = () => {
  const { moves, makeMove, reset } = useBoardState(new Array(9).fill(''));
  const { player, nextPlayer } = usePlayerState('X');

  return (
    <div className="board row">
      {moves.map((move, index) => (
        <Square
          key={`${index}.${move}`}
          move={move}
          index={index}
          onClick={() => {
            makeMove(index, player);
            nextPlayer(player === 'X' ? 'O' : 'X');
          }}
        />
      ))}
    </div>
  );
};

export default Board;
