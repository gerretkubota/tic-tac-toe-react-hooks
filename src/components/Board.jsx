import React from 'react';

import Square from './Square.jsx';

import useBoardState from '../hooks/useBoardState.jsx';

const Board = () => {
  const { moves, makeMove, reset } = useBoardState(new Array(9).fill(''));

  return (
    <div className="board row">
      {moves.map((move, index) => (
        <Square
          key={`${index}.${move}`}
          move={move}
          index={index}
          makeMove={makeMove}
        />
      ))}
    </div>
  );
};

export default Board;
