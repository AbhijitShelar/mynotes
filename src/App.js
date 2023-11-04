import './App.css';

import React from 'react'
import Homepage from './Homepage';
import Sidebar from './Sidebar';
import { NoteContextProvider } from './NoteContext';
const App = () => {
  return (
    <NoteContextProvider>
    <div className='container' >
       
      <Sidebar/>
     <Homepage/>
     
   
    </div>
    </NoteContextProvider>
  )
}

export default App;

