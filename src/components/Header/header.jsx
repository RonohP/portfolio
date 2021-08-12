import React from 'react';
import '../Header/header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons';
import diving from '../../diving.svg';
function Header() {

  return (
    <header className='hero'>
      <nav>
        <h2 className='logo'>
          Port<span>folio</span>
        </h2>
        <ul>
          <li>
            <a href='#about'>About Me</a>
          </li>
          <li>
            <a href='#skills'>Skills</a>
          </li>
          <li>
            <a href='#project'>Projects</a>
          </li>
          <li>
            <a href='#contact'>Contact Me</a>
          </li>
        </ul>
      </nav>
      <div id='container'>
        <img className='diving' src={diving} alt='diving' />
      </div>
      <div className='hero-text'>
        <h4>Hello, my name is</h4>
        <h1>
          Purity <span>Rono</span>
        </h1>
        <h3>Software Developer</h3>
        <a
          className='cv'
          href='https://drive.google.com/file/d/1jPQNUumWWponN2T0llnO7YbA1RNFNzEZ/view?usp=sharing'
          target='_blank'
          rel='noopener noreferrer'
        >
          CV
        </a>
      </div>

      <div className='share'>
        <p>Let's Connect</p>
        <div className='social'>
          <a
            href='https://github.com/RonohP'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href='https://www.linkedin.com/in/purity-rono/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
