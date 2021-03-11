import React from 'react';
import image1 from '../assets/static/icon1.svg';
import image2 from '../assets/static/icon2.svg';
import image3 from '../assets/static/icon3.svg';
import image4 from '../assets/static/icon4.svg';
import TitlePodcast from './TitlePodcast';
import Topic from './Topic';
import '../assets/styles/components/TopicsContainer.css';

const TopicsContainer = () => {
  return (
    <section id='topics' className='topicos'>
      <TitlePodcast title='Algunos de nuestros temas' color />
      <div className='topicos-icons'>
        <Topic img={image1} title='Trabajo remoto' />
        <Topic img={image2} title='Repasando la programación' />
        <Topic img={image3} title='Bases del código' />
        <Topic img={image4} title='Seguridad informática' />
      </div>
    </section>
  );
};

export default TopicsContainer;
