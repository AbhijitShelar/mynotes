import React from 'react';
import './NoteList.css';
import { useNoteContext } from './NoteContext';

const NoteList = ({ title, bgcolor }) => {
  const nameInitals = title
    .split(" ")
    .map((word) => word.substring(0, 2))
    .join("")
    .toUpperCase();
  const { displayTitle, setDisplayTitle,setBcolor } = useNoteContext();
  const { setShow } = useNoteContext();
  const isClicked = displayTitle === title;
  // console.log("hello", title, bgcolor);
  const handleClick = () => {
    console.log("ht",displayTitle);
    setDisplayTitle(isClicked ? '' : title);
    setBcolor(bgcolor);
    setShow(true);
  };

  return (
    <div
      className={`note-title-list ${isClicked ? 'clicked' : ''}`}
      onClick={handleClick}
    >
      <div className='title-logo-root'>
      <div className="title__logo" style={{ backgroundColor: bgcolor }}>
        {nameInitals}
      </div>
      </div>
      <div className='note-title'>{title}</div>
    </div>
  );
};

export default NoteList;
