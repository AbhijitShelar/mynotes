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

  return (
    <div className="notes-list-container">
      <h1>Pocket Notes</h1>
      <button className="create-note-button" onClick={showCreateNote}>
        + Create Notes group
      </button>
      {isCreateNoteVisible && <CreateNote />}
      {titles.length > 0 && (
        titles.map((title, index) => (
          <NoteList key={index} title={title} />
        ))
      )}
    </div>
  );
};

export default Sidebar;
