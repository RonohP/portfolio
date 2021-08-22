import React from 'react';
import './contact.css';
import '../../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarkerAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithub, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Contact() {
    return (
      <section className='contact' id='contact'>
        <div className='max-width'>
          <h2 className='title'>
            Contact <span>me</span>
          </h2>
          <div className='contact-content'>
            <div className='column left'>
              <div className='icons'>
                <div className='row'>
                  <FontAwesomeIcon className='font-awe' icon={faUser} />
                  <div className='info'>
                    <div className='head'>Name</div>
                    <div className='sub-title'>Purity Rono</div>
                  </div>
                </div>
                <div className='row'>
                  <FontAwesomeIcon className='font-awe' icon={faMapMarkerAlt} />
                  <div className='info'>
                    <div className='head'>Address</div>
                    <div className='sub-title'>Nairobi, Kenya</div>
                  </div>
                </div>
                <div className='row'>
                  <FontAwesomeIcon className='font-awe' icon={faEnvelope} />
                  <div className='info'>
                    <div className='head'>Email</div>
                    <div className='sub-title'>ronopurity05@gmail.com</div>
                  </div>
                </div>
              </div>
            </div>
            <div className='column right'>
              <div className='text'>
                  Let's Connect 
              </div>
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
          </div>
        </div>
      </section>
    );
}

export default Contact;