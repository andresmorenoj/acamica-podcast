import React from 'react';
import '../assets/styles/components/PodcastIframe.css';

const PodcastIframe = ({ source, title }) => {
  return (
    <iframe
      className='PodcastIframe'
      src={source}
      allow='encrypted-media'
      title={title}
    />
  );
};

export default PodcastIframe;
