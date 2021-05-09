import React from 'react';
import '../App.css';
import { Button } from './Button';
import './H.css';

function H() {
  return (
    <div className='hero-container'>
      <video src='/video/Pexels Videos 3635.mp4' autoPlay loop muted />
      <h1>ADVENTURE LIFE</h1>
      <p>Why are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          LET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH NOW <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default H;