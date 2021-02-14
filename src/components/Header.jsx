import React from 'react';
import Logo from '../assets/static/logo.svg';
import '../assets/styles/components/Header.css';

const Header = () => (
  <header className='Header'>
    <nav className='Navegation'>
      <figure className='Logo'>
        <img src={Logo} alt='Logo Podcast' />
      </figure>
      <ul className='Navagation__menu'>
        <li className='Navagation__menu-item'>
          <a href='#episodes'>Episodios</a>
        </li>
        <li className='Navagation__menu-item'>
          <a href='#whoWeAre'>Nosotros</a>
        </li>
        <li className='Navagation__menu-item'>
          <a href='#interviews'>Entrevistas</a>
        </li>
        <li className='Navagation__menu-item'>
          <a href='#topics'>Tópicos</a>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
