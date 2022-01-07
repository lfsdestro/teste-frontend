import React from 'react';
import './About.css';
import Titulo from '../Layout/Titulo';
import Button from '../Layout/Button';

const About = () => {
  return (
    <section className={'sobre-container'}>
      <div className={'services'}>
        <Titulo h2>{'The best services ready To serve you'}</Titulo>
        <Titulo p>
          {
            'Far far away, behind the word mountains,  far from the countries Vokalia and Consonantia, there live the blind texts.'
          }
        </Titulo>
        <Titulo p>
          {
            'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.'
          }
        </Titulo>
        <Titulo p>
          {
            'A small river named Duden flows by their place and supplies it with the necessary regelialia.'
          }
        </Titulo>
        <div className={'button-services'}>
          <Button label={'Know More'} />
        </div>
      </div>
    </section>
  );
};

export default About;
