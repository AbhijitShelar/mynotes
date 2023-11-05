import React, { useState } from 'react';
import CreateNote from './CreateNote';
import { useNoteContext } from './NoteContext';
import './Sidebar.css';
import NoteList from './NoteList';

const Sidebar = () => {
  const [isCreateNoteVisible, setCreateNoteVisible] = useState(false);
  const { titles } = useNoteContext();
 
  const showCreateNote = () => {
    setCreateNoteVisible(!isCreateNoteVisible);
  };
  // console.log("hi",titles);
  
  return (
    <div className="sidebar-container">
      <h1>Pocket Notes</h1>
      <button className="create-note-button" onClick={showCreateNote}>
        + Create Notes group
      </button>
      <div className='note-list-container'>
      {isCreateNoteVisible && <CreateNote />}
      {titles.map((titleInfo, index) => (
        
        <NoteList
          key={index}
          title={titleInfo.groupName}
          bgcolor={titleInfo.bgColor}
        />
      ))}
      </div>
    </div>
  );
};

export default Sidebar;
