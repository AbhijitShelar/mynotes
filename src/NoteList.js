import React from 'react';
import './NoteList.css';
import { useNoteContext } from './NoteContext';

const NoteList = ({ title }) => {
  const { displayTitle, setDisplayTitle } = useNoteContext();

  const isClicked = displayTitle === title;

  const handleClick = () => {
    setDisplayTitle(isClicked ? '' : title);
  };

  return (
    <div
      className={`note-title-list ${isClicked ? 'clicked' : ''}`}
      onClick={handleClick}
    >
      <div className='note-title'>{title}</div>
    </div>
  );
};

export default NoteList;
