import React from 'react';
import Titulo from '../Layout/Titulo';
import Input from '../Layout/Input';
import InputButton from '../Layout/InputButton';
import './Join.css';

const Join = () => {
  return (
    <section className={'join-container'}>
      <div className={'member'}>
        <div className={'join-email'}>
          <Titulo h2>{'Join our membership to get special offer'} </Titulo>
        </div>
        <div className={'join-input'}>
          <Input placeholder={'Enter your email address'} />
          <InputButton label={'Join'} btnjoin />
        </div>
      </div>
    </section>
  );
};

export default Join;
