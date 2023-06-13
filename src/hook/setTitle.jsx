
import { useEffect } from "react";

const setTitle = title =>{
    useEffect(()=>{
    document.title = `Ornaldo-Sports | ${title}`;
    },[title])
}

export default setTitle;