import React from 'react';
import PropTypes from 'prop-types';
import MDSpinner from 'react-md-spinner';

const Spinner = ({ size, floats }) => {
  return (
    <div className="flex-justify-center">
      <div className={ floats ? 'spinner' : '' }>
        <MDSpinner size={size} />
      </div>
    </div>
  );
};

Spinner.propTypes = {
  size: PropTypes.number.isRequired,
  floats: PropTypes.bool
};

export default Spinner;
