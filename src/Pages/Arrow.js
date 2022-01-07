import React from 'react';
import './Blog.css';

const Arrow = ({ seta, setaleft }) => {
  return (
    <button className={`setaright ${setaleft ? 'setaleft' : ''}`}>
      <img src={seta} alt='teste' />
    </button>
  );
};

export default Arrow;
