import React from 'react';
import './Input.css';

const InputButton = ({ img, btnjoin, label }) => {
  return (
    <button className={`input-button ${btnjoin ? 'btnjoin' : ''}`}>
      <img src={img} alt="teste" /> {label}
    </button>
  );
};

export default InputButton;
