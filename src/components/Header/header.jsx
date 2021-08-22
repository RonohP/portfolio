import React from 'react';
import './header.css';
import '../../App.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebook, faGithub, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import diving from '../../diving.svg';
import Navbar from './Navbar/navbar';
import ScrollToTop from './Scroll/scrollToTop';


function Header() {

  return (
    <header className='hero'>
      <ScrollToTop />

      <Navbar />

      <img className='diving' src={diving} alt='diving' />
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

      {/* <div className='share'>
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
          <a
            href='https://www.instagram.com/purity_rono/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href='https://web.facebook.com/purity.jel/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a
            href='https://twitter.com/jelimo_rono'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div> 
      </div>*/}
    </header>
  );
}

export default Header;
