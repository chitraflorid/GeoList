import React from 'react';
import './header.css';

export const Header = ({ type }) => {
  return (
    <div className="header">
        {type}
    </div>
  );
};

