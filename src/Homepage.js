import React, { useState } from "react";
import "./Homepage.css";
import { useNoteContext } from "./NoteContext";

const Homepage = () => {
  const { displayTitle } = useNoteContext();
  const [date,setDate]=useState(new Date());
  const [noteNamesParent, setNoteNamesParent] = useState(
    JSON.parse(localStorage.getItem(displayTitle)) || []
  );

  const [noteText, setNoteText] = useState("");
  const handleChange = (e) => {
    setNoteText(e.target.value);
  };
  const handleClick = () => {
     setDate(new Date());
    const newGroup = { note:noteText, date:date};
    const updatedNoteNames = [...noteNamesParent, newGroup];
    setNoteNamesParent(updatedNoteNames);
   localStorage.setItem(displayTitle,JSON.stringify(updatedNoteNames));
   setNoteText('');

  };

  return (
    <div className="home-container">
      <div className="header-note">
        <h1>{displayTitle}</h1>
      </div>
      <div className="display-notes"></div>
      <div className="type-container">
        <input
          type="text"
          id="note-text"
          className="note-box"
          required
          placeholder="Enter your text here..........."
          value={noteText}
          onChange={handleChange}
        ></input>
        <button className="send" onClick={handleClick}></button>
      </div>
    </div>
  );
};

export default Homepage;
