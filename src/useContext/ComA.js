import React, { createContext } from 'react'
import ComB from './ComB'

const BioData = createContext();
function ComA() {
  return (

        <BioData.Provider value={` "send props through useContext "`}>
         <ComB/>
        </BioData.Provider>

  )
}

export default ComA

export {BioData};




