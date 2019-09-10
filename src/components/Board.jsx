import React from 'react';
import PropTypes from 'prop-types';
import Square from './Square.jsx';

const Board = ({ moves, makeMove, player, nextPlayer }) => (
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

Board.propTypes = {
  moves: PropTypes.array,
  makeMove: PropTypes.func,
  player: PropTypes.string,
  nextPlayer: PropTypes.func,
};

export default Board;
