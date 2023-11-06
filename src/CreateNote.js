import React, { useState } from "react";
import { useNoteContext } from "./NoteContext";
import "./CreateNote.css";

const CreateNote = () => {
  const [groupName, setGroupName] = useState("");
  const [bgColor, setBgColor] = useState("");
  const[isColorSelected,setIsColorSelected]=useState(false);



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
    if(!isColorSelected){
      alert("Plz Select Note Color");
      return;
    }

    const hide = document.getElementById("root-container");
    hide.style.display = "none";

    const newGroup = { name: groupName,color:bgColor };
    const updatedGroupNames = [...groupNamesParent, newGroup];
    setGroupNamesParent(updatedGroupNames);

    // Store the updated data in localStorage with a different key "groupNames"
    localStorage.setItem("groupNames", JSON.stringify(updatedGroupNames));

    //to get titles when page refreshes
    const newNoteTitles = {groupName,bgColor};
    const updatedNoteTitles = [...noteTitlesParent, newNoteTitles];
    setNoteTitlesParent(updatedNoteTitles);
    localStorage.setItem("noteTitles", JSON.stringify(updatedNoteTitles));

    // Add the group name to the context 
    addTitle({groupName,bgColor});
    setGroupName(""); // Clear the input field
  };

  const handleColor = (e) => {
    setIsColorSelected(!isColorSelected);
    const div = e.target;
    setBgColor(getComputedStyle(div).backgroundColor);
  };

  return (
    <div id="root-container">
      <h3>Create New Notes group</h3>
      <div className="group-name">
        <span >Group name</span>
        <input
          id="input-text"
          type="text"
          className="input-name"
          value={groupName}
          onChange={handlechange}
          placeholder="Enter Group Name...."
        ></input>
      </div>
      <div className="popup__color__input">
        <span>Group Color</span>
        <div className="popup__color__input__color">
          <div
            className={`popup__color__input__color__1 ${
              bgColor === "rgb(179, 139, 250)" ? `highlight` : null
            }`}
            onClick={handleColor}
          ></div>
          <div
            className={`popup__color__input__color__2 ${
              bgColor === "rgb(255, 121, 242)" ? `highlight` : null
            }`}
            onClick={handleColor}
          ></div>
          <div
            className={`popup__color__input__color__3 ${
              bgColor === "rgb(67, 230, 252)" ? `highlight` : null
            }`}
            onClick={handleColor}
          ></div>
          <div
            className={`popup__color__input__color__4 ${
              bgColor === "rgb(241, 149, 118)" ? `highlight` : null
            }`}
            onClick={handleColor}
          ></div>
          <div
            className={`popup__color__input__color__5 ${
              bgColor === "rgb(0, 71, 255)" ? `highlight` : null
            }`}
            onClick={handleColor}
          ></div>
          <div
            className={`popup__color__input__color__6 ${
              bgColor === "rgb(102, 145, 255)" ? `highlight` : null
            }`}
            onClick={handleColor}
          ></div>
        </div>
      </div>
      <button id="create-btn" className="create-button" onClick={handleclick}>
        Create
      </button>
    </div>
  );
};

export default CreateNote;
