import React from 'react';

const StepButton = ({ onClick, label }) => {
  return (
    <div>
      <button
      onClick={onClick}
      className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 ml-2"
    >
      {label}
    </button>
    </div>
  );
}

export default StepButton;