import React from 'react';
import './about.css';
import '../../App.css';
import about from '../../image/me.jpg';
import ReactTypingEffect from 'react-typing-effect';


function About() {
    return (
      <section className='about' id='about'>
        <div className='max-width'>
          <h2 className='title'>
            About <span>me</span>
          </h2>
          <div className='about-content'>
            <div className='column left photo'>
              <img src={about} alt='about' />
              <div class='glow-wrap'>
                <i class='glow'></i>
              </div>
            </div>
            <div className='column right'>
              <div className='about-text'>
                <h5>
                  Purity Rono is a {' '}
                  <ReactTypingEffect
                    text={['Student.', 'Software Developer.']}
                  />
                </h5>
                <p>
                  She is pursuing a Degree in Informatics and Computer Science.
                  Currently in fellowship at{' '}
                  <a
                    href='https://tech4dev.com/programs/women-techsters.html'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Tech4Dev
                  </a>{' '} in the WomenTechsters Program.
                  <br /><br />
                  She is passionate about
                  Software Developmnet. She aims to make fast loading, responsive and dynamic applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default About;