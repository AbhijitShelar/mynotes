// import { useState } from "react";
import React  from "react";
import "./CreateNote.css";
import useMynotecontext from "./hooks/useMynotecontext";
const CreateNote = () => {

  const {notename,setNotename}=useMynotecontext();
  const handlechange = (e) => {
      setNotename(e.target.value); 
  };
  const handleclick = () => {
    const root = document.getElementById("root-container");
    root.style.display = "none";
    localStorage.setItem(notename,notename);
    
    setNotename("");


  };
 

  return (
    <div id="root-container">
      <h1>Create New Notes group</h1>
      <div className="group-name">
        <h2>Group name</h2>
        <input
          type="text"
          className="input-name"
          value={notename}
          onChange={handlechange}
          placeholder="Enter Group Name...."
        ></input>
      </div>
      <div className="color">
        <h3>Choose Color</h3>
      </div>
      <button className="create-button" onClick={handleclick}>
        Create
      </button>
    </div>
  );
};

export default CreateNote;
