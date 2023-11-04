import React, { useState } from "react";
import { useNoteContext } from "./NoteContext";
import "./CreateNote.css";

const CreateNote = () => {
  const [groupName, setGroupName] = useState("");
  const [groupNamesParent, setGroupNamesParent] = useState(
    JSON.parse(localStorage.getItem("groupNames")) || []
  );
  const [noteTitlesParent, setNoteTitlesParent] = useState(
    JSON.parse(localStorage.getItem("noteTitles")) || []
  );
  const { addTitle } = useNoteContext();

  const handlechange = (e) => {
    setGroupName(e.target.value);
  };

  const handleclick = () => {
    if (!groupName) {
      alert("Enter a Group name");
      return;
    }

    const hide = document.getElementById("root-container");
    hide.style.display = "none";

    const newGroup = { name: groupName };
    const updatedGroupNames = [...groupNamesParent, newGroup];
    setGroupNamesParent(updatedGroupNames);

    // Store the updated data in localStorage with a different key "groupNames"
    localStorage.setItem("groupNames", JSON.stringify(updatedGroupNames));

    //to get titles when page refreshes
    const newNoteTitles = groupName;
    const updatedNoteTitles = [...noteTitlesParent, newNoteTitles];
    setNoteTitlesParent(updatedNoteTitles);
    localStorage.setItem("noteTitles", JSON.stringify(updatedNoteTitles));

    // Add the group name to the context (if needed)
    addTitle(groupName);

    setGroupName(""); // Clear the input field
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
      <button id="create-btn" className="create-button" onClick={handleclick}>
        Create
      </button>
    </div>
  );
};

export default CreateNote;
