import React, { useState } from "react";
import { useNoteContext } from "./NoteContext";
import "./CreateNote.css";

const CreateNote = () => {
  const [groupName, setGroupName] = useState("");
  const { addTitle } = useNoteContext();

  const handlechange = (e) => {
    setGroupName(e.target.value);
  };
  const isInputEmpty = groupName.trim() === "";
  const handleclick = () => {
    if(isInputEmpty){
            alert('Enter a Group name');
    }
    else{
    const hide = document.getElementById("root-container");
    hide.style.display = "none";
    localStorage.setItem(groupName, groupName);
    addTitle(groupName);
    setGroupName("");
    }
  };
  return (
    <div id="root-container">
      <h1>Create New Notes group</h1>
      <div className="group-name">
        <h2>Group name</h2>
        <input
          id="input-text"
          type="text"
          className="input-name"
          value={groupName}
          onChange={handlechange}
          placeholder="Enter Group Name...."
        ></input>
      </div>
      <div className="color">
        <h3>Choose Color</h3>
      </div>
      <button id="create-btn" className="create-button" onClick={handleclick} >
        Create
      </button>
    </div>
  );
};

export default CreateNote;
