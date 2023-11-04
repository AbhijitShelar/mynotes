import './Homepage.css';
import { useNoteContext } from './NoteContext';
const Homepage = () => {
       const {displayTitle}=useNoteContext();      

  return (
    <div className='home-container'>
      <div className='header-note'>
        <h1>{displayTitle}</h1>
      </div>
     
    </div>
  );
}

export default Homepage;
