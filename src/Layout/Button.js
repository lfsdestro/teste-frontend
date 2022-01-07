import React from 'react';
import './Button.css';

function Button({ label, branco }) {
  return <button className={`botao ${branco ? 'branco' : ''}`}>{label}</button>;
}

export default Button;
