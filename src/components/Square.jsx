import React from 'react';

import PropTypes from 'prop-types';

const Square = ({ move, index, makeMove }) => (
  <div className="square" onClick={() => makeMove(index)}>
    {move}
  </div>
);

Square.propTypes = {
  move: PropTypes.string,
  index: PropTypes.number,
  makeMove: PropTypes.func,
};

export default Square;
