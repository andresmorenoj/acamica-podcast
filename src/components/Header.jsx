import React, { useState, useEffect } from 'react';
import Logo from '../assets/static/logo.svg';
import { ImParagraphJustify } from 'react-icons/im';
import { ImCross } from 'react-icons/im';
import '../assets/styles/components/Header.css';

const Header = () => {
  const [viewport, setViewport] = useState(window.innerWidth);
  const [menuIcon, setMenuIcon] = useState(true);

  const handleViewportWidth = () => setViewport(window.innerWidth);

  useEffect(() => {
    if (window.innerWidth) {
      window.addEventListener('resize', handleViewportWidth);
    }

    return () => window.removeEventListener('resize', handleViewportWidth);
  }, []);

  const menu = () => (
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
  );

  const menuIconRender = () =>
    menuIcon ? <ImParagraphJustify /> : <ImCross />;

  const displayResponsiveMenu = () => (
    <div className='Navagation__menu-responsive'>
      <figure className='Logo'>
        <img src={Logo} alt='Logo Podcast' />
      </figure>
      <div>
        <span onClick={() => setMenuIcon(!menuIcon)}>{menuIconRender()}</span>
        {!menuIcon && menu()}
      </div>
    </div>
  );

  const menuDisplay = () =>
    viewport <= 767 ? displayResponsiveMenu() : menu();

  return (
    <header className='Header'>
      <nav className='Navegation'>
        {viewport >= 768 && (
          <figure className='Logo'>
            <img src={Logo} alt='Logo Podcast' />
          </figure>
        )}
        {menuDisplay()}
      </nav>
    </header>
  );
};

export default Header;
