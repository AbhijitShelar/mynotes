import React from "react";
import "./Note.css";

const Note = ({ displayNotes }) => {
  return (
    <div>
      {displayNotes.length > 0 ? (
        displayNotes.map((item, index) => (
          <div className="note-item" key={index}>
            <div className="date-time">
              <div className="date">{item.date}</div>
              <div className="time">{item.time}</div>
            </div>
            <div className="note-text-container">
              <div className="note-text"><p>{item.note}</p></div>
            </div>
          </div>
        ))
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default Note;
