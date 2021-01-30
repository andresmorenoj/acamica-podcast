import React from 'react';
import '../assets/styles/components/Topic.css';

const Topic = ({ img, title }) => (
  <div className='topicos-icons-item'>
    <img src={img} alt={title} />
    <p>{title}</p>
  </div>
);

export default Topic;
