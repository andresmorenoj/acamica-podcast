import React from 'react';
import '../assets/styles/components/ButtonPodcast.css';

const ButtonPodcast = ({ title, url }) => {
  return (
    <a href={url} className='ButtonPodcast'>
      {title}
    </a>
  );
};

export default ButtonPodcast;
