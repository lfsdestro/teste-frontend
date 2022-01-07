import React from 'react';
import Button from '../Layout/Button';
import './Card.css';

function Card({ label, img, titulo }) {
  return (
    <div className={'card-container'}>
      <div className={'card-img'}>
        <img src={img} alt={titulo} />
      </div>
      <div className={'card-texto'}>
        <p>{titulo}</p>
        <div className={'card-button'}>
          <Button label={label} />
        </div>
      </div>
    </div>
  );
}

export default Card;
