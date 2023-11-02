import { useContext } from "react";
import MyNotescontext from "../context/MyNotescontext";
const useMynotecontext=()=>{
    return useContext(MyNotescontext);
}
export default useMynotecontext;