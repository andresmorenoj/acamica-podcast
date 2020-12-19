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
          <a href=''>Episodios</a>
        </li>
        <li className='Navagation__menu-item'>
          <a href=''>Nosotros</a>
        </li>
        <li className='Navagation__menu-item'>
          <a href=''>Entrevistas</a>
        </li>
        <li className='Navagation__menu-item'>
          <a href=''>Tópicos</a>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
