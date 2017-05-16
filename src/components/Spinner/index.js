import React from 'react';
import MDSpinner from "react-md-spinner";

const Spinner = ({ color, size }) => {
  return (
    <div className="flex-justify-center">
      <MDSpinner size={size} />
    </div>
  );
};

export default Spinner;
