import React from 'react';
import './BlogCards.css';

function BlogCards({ img, titulo, avatar, nome }) {
  return (
    <div className={'card-container1'}>
      <div className={'imgblog'}>
        <img src={img} alt='teste' />
      </div>
      <div className={'card-text'}>
        <h3>{titulo}</h3>
      </div>
      <div className={'avatar'}>
        <img src={avatar} alt='teste' />
        <p>{nome}</p>
      </div>
    </div>
  );
}

export default BlogCards;
