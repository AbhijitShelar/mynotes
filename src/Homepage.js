import React from 'react';
import './Homepage.css';
import { useNoteContext } from './NoteContext';

const Homepage = () => {
  const { displayTitle } = useNoteContext();

  return (
    <div className='home-container'>
      <div className='header-note'>
        <h1>{displayTitle}</h1>
      </div>
      <div className='type-container'>
        <input
          type='text'
          id='note-text'
          className='note-box'
          required
          placeholder='Enter your text here...........'
        ></input>
        <button className='send'></button>
      </div>
    </div>
  );
};

export default Homepage;
