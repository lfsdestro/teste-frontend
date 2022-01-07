import React from 'react';
import Navbar from './Navbar';
import Titulo from '../Layout/Titulo';
import Input from '../Layout/Input';
import InputButton from '../Layout/InputButton';
import lupa from '../img/magnifying-glass.svg';
import './Ready.css';

const Ready = () => {
  return (
    <div className={'home-container'}>
      <Navbar />
      <div className={'search-container'}>
        <Titulo h1>Ready for Trying a new recipe?</Titulo>
      </div>
      <div className={'input-container'}>
        <Input placeholder={'Search healthy recipes'} />
        <InputButton img={lupa} />
      </div>
    </div>
  );
};

export default Ready;
