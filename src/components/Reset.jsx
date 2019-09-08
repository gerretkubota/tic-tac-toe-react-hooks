import React from 'react';
import PropTypes from 'prop-types';

const Reset = ({ onClick }) => (
  <button type="button" onClick={onClick}>
    RESET
  </button>
);

Reset.propTypes = {
  onClick: PropTypes.func,
};

export default Reset;
