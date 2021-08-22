import { faCode, faCogs } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './skills.css';
import '../../App.css';
import { faFileCode } from '@fortawesome/free-regular-svg-icons';


function Skills() {
    return (
      <section className='skills' id='skills'>
        <div className='max-width'>
          <h2 className='title'>Skills</h2>

          <div className='skills-content'>
            <div className='card'>
              <FontAwesomeIcon
                icon={faCode}
                style={{
                  fontSize: '50px',
                  textAlign: 'center',
                  margin: '25px 0px',
                  color: '#DD8888',
                }}
              />
              <h5>Languages</h5>
              <div className='para'>
                <ul>
                  <li>JavaScript</li>
                  <li>Java</li>
                  <li>C#</li>
                  <li>PHP</li>
                  <li>HTML</li>
                  <li>MySQL</li>
                </ul>
              </div>
            </div>
            <div className='card'>
              <FontAwesomeIcon
                icon={faCogs}
                style={{
                  fontSize: '50px',
                  textAlign: 'center',
                  margin: '25px 0px',
                  color: '#DD8888',
                }}
              />
              <h5>Frameworks</h5>
              <div className='para'>
                <ul>
                  <li>ReactJS</li>
                  <li>Laravel</li>
                  <li>Bootstrap</li>
                  <li>jQuery</li>
                </ul>
              </div>
            </div>
            <div className='card'>
              <FontAwesomeIcon
                icon={faFileCode}
                style={{
                  fontSize: '50px',
                  textAlign: 'center',
                  margin: '25px 0px',
                  color: '#DD8888',
                }}
              />
              <h5>Others</h5>
              <div className='para'>
                <ul>
                  <li>Git</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Skills;