import React from 'react'
import './NoteList.css'
const NoteList = ({title}) => {
  return (
    <div className='note-title-list'>

      <div className='note-title'>
        {title}
      </div>
      
    </div>
  )
}

export default NoteList
