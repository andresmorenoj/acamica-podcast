import React from 'react';
import TitlePodcast from './TitlePodcast';
import GraceHooper from '../assets/static/grace-hopper.png';
import KatieBouman from '../assets/static/Katie-Bouman.png';
import MargaretHamilton from '../assets/static/Margaret_Hamilton.png';
import OldComputador from '../assets/static/OldComputer.png';
import ComputerOperator from '../assets/static/ComputerOperator.png';
import SusanKare from '../assets/static/susan-kare.png';
import '../assets/styles/components/Guesses.css';

const Guesses = () => {
  return (
    <section id='interviews' className='entrevistas'>
      <TitlePodcast title='Invitadas/os estelares' color />
      <div className='entrevistas-imgs'>
        <img src={GraceHooper} alt='Imagen de Grace Hopper' />
        <img src={KatieBouman} alt='Imagen de Katie Bouman' />
        <img src={MargaretHamilton} alt='Imagen de Margaret Hamilton' />
        <img src={OldComputador} alt='Computador de 1950' />
        <img src={ComputerOperator} alt='Imagen de Computer Operatiors' />
        <img src={SusanKare} alt='Imagen de susan Kare' />
      </div>
    </section>
  );
};

export default Guesses;
