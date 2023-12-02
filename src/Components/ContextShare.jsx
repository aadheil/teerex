import React, { createContext, useState } from 'react'

export const addcontext = createContext()
function ContextShare({children}) {
    const [addthings,setaddthings]=useState([])
    const [addwish,setaddwish]=useState([])

  return (
    <addcontext.Provider value={{addthings,setaddthings,addwish,setaddwish}}>
        {children}
    </addcontext.Provider>
  )
}

export default ContextShare