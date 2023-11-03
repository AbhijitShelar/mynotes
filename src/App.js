import './App.css';

import React from 'react'
import Homepage from './Homepage';
import Sidebar from './Sidebar';
const App = () => {
  return (
    <div className='container' >
    
      <Sidebar/>
     <Homepage/>
   
    </div>
  )
}

export default App;

