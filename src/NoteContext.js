import React, { createContext, useContext, useState, useEffect } from 'react';

const NoteContext = createContext();

export function useNoteContext() {
  return useContext(NoteContext);
}

export function NoteContextProvider({ children }) {
  const [titles, setTitles] = useState([]);
  const [displayTitle, setDisplayTitle] = useState('');

  const addTitle = (title) => {
    setTitles((prevTitles) => [...prevTitles, title]);
  };

  useEffect(() => {
    // Load titles from local storage on initial render
    const storedTitles = localStorage.getItem('noteTitles');
    if (storedTitles) {
      setTitles(JSON.parse(storedTitles));
    }
  }, []);
  

  

  return (
    <NoteContext.Provider value={{ titles, addTitle, displayTitle, setDisplayTitle }}>
      {children}
    </NoteContext.Provider>
  );
}
