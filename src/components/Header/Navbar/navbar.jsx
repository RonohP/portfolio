import React from 'react';
import { useState, useEffect } from 'react';
import '../header.css';
import './navbar.css';
import '../../../App.css';

function Navbar() {
  const [sticky, setSticky] = useState(false);
  const [bar, setBar] = useState(false);

  const navChange = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    navChange();
    window.addEventListener('scroll', navChange);
  }, []);

  const menuChange = () => {
    setBar(!bar);
  };

  return (
    <nav className={sticky ? 'navbar sticky' : 'navbar'} onClick={menuChange}>
      <h2 className='logo'>
        Port<span>folio</span>
      </h2>
      <ul className={bar ? 'menu open active' : 'menu'}>
        <li>
          <a href='#about' className='menu-btn'>
            About
          </a>
        </li>
        {/* <li>
            <a href='#services' className='menu-btn'>
              Services
            </a>
          </li> */}
        <li>
          <a href='#skills' className='menu-btn'>
            Skills
          </a>
        </li>
        {/* <li>
            <a href='#project' className='menu-btn'>
              Projects
            </a>
          </li> */}
        <li>
          <a href='#contact' className='menu-btn'>
            Contact Me
          </a>
        </li>
        <li>
          <a
            href='https://drive.google.com/file/d/1jPQNUumWWponN2T0llnO7YbA1RNFNzEZ/view?usp=sharing'
            target='_blank'
            rel='noopener noreferrer'
          >
            {' '}
            Resume
          </a>
        </li>
      </ul>
      <div className={bar ? 'menu-btn open active' : 'menu-btn'}>
        <div className='menu-toggler'>
          <div className='bar half start'></div>
          <div className='bar'></div>
          <div className='bar half end'></div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
