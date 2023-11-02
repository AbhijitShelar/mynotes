import React, { useState } from 'react';
import CreateNote from './CreateNote';
import './Sidebar.css';

const Sidebar = () => {
  const [isCreateNoteVisible, setCreateNoteVisible] = useState(false);

  const showCreateNote = () => {
    setCreateNoteVisible(!isCreateNoteVisible);
  }
  return (
   
      <div className="notes-list-container">
        <h1>Pocket Notes</h1>
        <button className="create-note-button" onClick={showCreateNote}>
          + Create Notes group
        </button>
        {isCreateNoteVisible && <CreateNote />}
      </div>
      
   
  );
};

export default Sidebar;
