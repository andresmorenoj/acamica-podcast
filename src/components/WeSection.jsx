import React from 'react';
import NosotrosImage from '../assets/static/phone.png';
import TitlePodcast from './TitlePodcast';
import '../assets/styles/components/WeSection.css';

const WeSection = () => (
  <section id='whoWeAre' className='nosotros'>
    <div className='nosotros-content'>
      <img src={NosotrosImage} alt='Celular, mujer con computador' />
      <div className='nosotros-content-info'>
        <TitlePodcast title='De dónde venimos' color />
        <p>
          Our posturings, our imagined self-importance, the delusion that we
          have some privileged position in the Universe, are challenged by this
          point of pale light.
        </p>

        <p>
          Our planet is a lonely speck in the great enveloping cosmic dark. In
          our obscurity, in all this vastness, there is no hint that help will
          come from elsewhere to save us from ourselves.
        </p>
      </div>
    </div>
  </section>
);

export default WeSection;
