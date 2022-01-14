import React from 'react';
import TitlePodcast from './TitlePodcast';
import ButtonPodcast from './ButtonPodcast';
import '../assets/styles/components/CallToAction.css';

const CallToAction = () => {
  return (
    <section id='novedades' className='novedades anotherClasss'>
      <div className='novedades-content'>
        <TitlePodcast title='¿Querés las últimas novedades?' color={false} />
        <ButtonPodcast title='ESCUCHÁ LOS EPISODIOS' url='/#episodes' />
      </div>
    </section>
  );
};

export default CallToAction;
