import React from 'react';
import Titulo from '../Layout/Titulo';
import './Footer.css';
const Footer = () => {
  return (
    <div className={'footer-container'}>
      <Titulo span>© Copyrights 2019 Stack. All Rights Reserved.</Titulo>
      <div className={'privacyPolicy'}>
        <Titulo span>Privacy Policy</Titulo>
        <div className={'termsCondition'}>
          <Titulo span> Terms and Conditions</Titulo>
        </div>
      </div>
    </div>
  );
};

export default Footer;
