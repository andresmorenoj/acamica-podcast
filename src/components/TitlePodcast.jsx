import React from 'react';
import '../assets/styles/components/TitlePodcast.css';

const TitlePodcast = ({ title, color }) => {
  return (
    <h2
      className={`TitlePodcast ${
        color ? 'TitlePodcast__black' : 'TitlePodcast__white'
      }`}
    >
      {title}
    </h2>
  );
};

export default TitlePodcast;
