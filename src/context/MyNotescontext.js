import {  createContext,useState } from "react";

const MyNotescontext = createContext({
    notename: [],
    setNotename: ()=>{}
});

const Provider=({children})=>
{
  const [notename,setNotename]=useState([]);
    const valueToShare={
        notename,
        setNotename
    }

    return(
        <MyNotescontext.Provider value={valueToShare}>
            {children}
        </MyNotescontext.Provider>
    );
};
export { Provider };
export default MyNotescontext;
