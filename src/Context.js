import React, { useState } from 'react'
import { createContext } from 'react'
export const globalState= createContext()

function Context({children}) {
    const [count,setCount]=useState(0);
    const [fvrt,setFvrt]=useState(0);
    const [text,setText]=useState("");

  return (
   <globalState.Provider value={{count,setCount,fvrt,setFvrt,text,setText}}>
        {children}
   </globalState.Provider>
  )
}
    
export default Context
