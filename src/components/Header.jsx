import React from 'react';

const Header = ({ headerText }) => {
  return (
    <div className="border-b border-gray-200 pb-5 pl-5 pt-5 z-999 top-0 bg-white">
      <h3 className="text-lg font-semibold leading-6 text-gray-900">
        {headerText}
      </h3>
    </div>
  );
};

export default Header;