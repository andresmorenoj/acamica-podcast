import React from 'react';
import TitlePodcast from './TitlePodcast';
import PodcastIframe from './PodcastIframe';
import '../assets/styles/components/Episodes.css';

const Episodes = () => {
  return (
    <section id='episodes' className='Episodes'>
      <TitlePodcast title='Episodios' color={false} />
      <div className='Episodes__iframes'>
        <PodcastIframe
          source='https://open.spotify.com/embed-podcast/show/2ySVrxGkN6n6frMTo9Nsrt'
          title='1'
        />
        <PodcastIframe
          source='https://open.spotify.com/embed-podcast/show/4kYCRYJ3yK5DQbP5tbfZby'
          title='2'
        />
        <PodcastIframe
          source='https://open.spotify.com/embed-podcast/show/5JxcIaIkN8zx3Zy7yD9snv'
          title='3'
        />
        <PodcastIframe
          source='https://open.spotify.com/embed-podcast/show/2Iibd5A6R7mxkCm4NwNmUn'
          title='4'
        />
      </div>
    </section>
  );
};

export default Episodes;
