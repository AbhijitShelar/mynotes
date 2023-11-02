import './App.css';

import React from 'react'
import Homepage from './Homepage';
import Sidebar from './Sidebar';
import { Provider } from './context/MyNotescontext';
const App = () => {
  return (
    <div className='container' >
     <Provider>
      <Sidebar/>
     <Homepage/>
     </Provider>
     {/* <Dem/> */}
    </div>
  )
}

export default App;

