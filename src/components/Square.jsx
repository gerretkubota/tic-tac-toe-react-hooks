import React from 'react';

import PropTypes from 'prop-types';

const Square = ({ move, onClick }) => (
  <button type="button" className="square" onClick={onClick}>
    {move}
  </button>
);

Square.propTypes = {
  move: PropTypes.string,
  onClick: PropTypes.func,
};

export default Square;
