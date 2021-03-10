import React, { useState, useEffect } from 'react';
import ButtonPodcast from './ButtonPodcast';
import '../assets/styles/components/HelloWorld.css';

const HelloWorld = () => {
  const [viewport, setViewport] = useState(window.innerWidth);

  const handleViewportWidth = () => setViewport(window.innerWidth);

  useEffect(() => {
    if (window.innerWidth) {
      window.addEventListener('resize', handleViewportWidth);
    }

    return () => window.removeEventListener('resize', handleViewportWidth);
  }, []);

  const helloWorldContent = () => (
    <>
      <h1 className='HelloWorld__title'>
        Hello <span>World</span>
        <br />
        pale blue dot<span>.</span>
      </h1>
      <p className='HelloWorld__text'>
        Un podcast que explora el mundo de la programación. Nuevos episodios,
        todos los jueves cada 15 días.
      </p>
    </>
  );

  return (
    <div className='HelloWorld'>
      {viewport <= 420 ? (
        helloWorldContent()
      ) : (
        <>
          <h1 className='HelloWorld__title'>
            Hello <span>World</span> pale blue dot<span>.</span>
          </h1>
          <p className='HelloWorld__text'>
            El portal de podcasts que explora el mundo de la programación y la
            tecnología. Nuevos episodios, todos los jueves cada 15 días.
          </p>
        </>
      )}
      <ButtonPodcast title='Conocé más' url='#whoWeAre' />
    </div>
  );
};

export default HelloWorld;
