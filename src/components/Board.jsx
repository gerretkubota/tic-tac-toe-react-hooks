import React from 'react';
import PropTypes from 'prop-types';
import Square from './Square.jsx';

const Board = ({ moves, makeMove, nextPlayer }) => (
  <div className="board row">
    {moves.map((move, index) => (
      <Square
        key={`${index}.${move}`}
        move={move}
        index={index}
        onClick={() => {
          makeMove(index);
          nextPlayer();
        }}
      />
    ))}
  </div>
);

Board.propTypes = {
  moves: PropTypes.array,
  makeMove: PropTypes.func,
  nextPlayer: PropTypes.func,
};

export default Board;
