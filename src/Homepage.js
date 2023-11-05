import React, { useState } from "react";
import "./Homepage.css";
import { useNoteContext } from "./NoteContext";
import Note from "./Note";

const Homepage = () => {
  const { show, displayTitle, displayNotes, setDisplayNotes,bcolor } =
    useNoteContext();
    const nameInitals = (typeof displayTitle === 'string') ? displayTitle.split(" ")
    .map((word) => word.substring(0, 2))
    .join("")
    .toUpperCase() : '';

  
  const [date, setDate] = useState(new Date());
  const [noteNamesParent, setNoteNamesParent] = useState(
    JSON.parse(localStorage.getItem(displayTitle)) || []
  );

  const [noteText, setNoteText] = useState("");
  const handleChange = (e) => {
    setNoteText(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent the default form submission
      handleClick(); // Trigger the button click
    }
  };

  const handleClick = () => {
    setDate(new Date());
    const newGroup = {
      note: noteText,
      date: date.toLocaleDateString(), // Get the date as a string
      time: date.toLocaleTimeString(), // Get the time as a string
    };

    const existingData = JSON.parse(localStorage.getItem(displayTitle)) || [];
    const mergedData = [...existingData, newGroup];

    localStorage.setItem(displayTitle, JSON.stringify(mergedData));

    setNoteNamesParent(mergedData); // Update the local state
    setDisplayNotes(mergedData); // Update the context state

    setNoteText("");
  };

  return (
    <>
      {show ? (
        <div className="home-container">
          <div className="header-note">
          <div className="title__logo" style={{ backgroundColor: bcolor }}>
        {nameInitals}
      </div>
            <div className="header-note-title">{displayTitle}</div>
          </div>
          <div className="notes-display">
            <Note displayNotes={displayNotes} />
          </div>
          <div className="type-container">
            <textarea
              id="note-text"
              className="note-box"
              required
              placeholder="Enter your text here..........."
              value={noteText}
              onChange={handleChange}
              onKeyPress={handleKeyPress}
            />
            <button className="send" onClick={handleClick}></button>
          </div>
        </div>
      ) : (
        <div className="root-container">
          <div className="img-container"></div>
          <div className="txt-conatainer">
            <p className="pn"> Pocket Notes</p>
            <p className="info-txt">
              Send and receive messages without keeping your phone online.
            </p>
            <p className="info-txt">
           
              Use Pocket Notes on up to 4 linked devices and 1 mobile phone
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Homepage;
