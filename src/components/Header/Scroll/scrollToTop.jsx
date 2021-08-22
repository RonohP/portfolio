import React from 'react';
import {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import '../header.css';
import './scroll.css';
import '../../../App.css';

function ScrollToTop() {
    const [scrollBtn, setScrollBtn] = useState(false);

    const scroll = () => {
      if (window.scrollY >= 500) {
        setScrollBtn(true);
      } else {
        setScrollBtn(false);
      }
    };

    const scrollTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };

    useEffect(() => {
      scroll();
      scrollTop();
      window.addEventListener('scroll', scroll);
      window.addEventListener('click', scrollTop);
    }, []);

    return (
      <div className={scrollBtn ? 'scroll-up-btn show' : 'scroll-up-btn'}>
        <FontAwesomeIcon icon={faAngleUp} />
      </div>
    );
}

export default ScrollToTop;