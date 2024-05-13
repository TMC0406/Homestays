import React from 'react'
import { Routes,Route } from "react-router-dom"
import ManagePostings from '../components/ManagePostings';
const PesonalAct = ({children}) => {
    console.log({children});
    
  return (
    <div>
        PesonalAct
        <Routes>
            <Route path='' element= {<ManagePostings/>} />
        </Routes>
        {children}
    </div>
  )
}

export default PesonalAct;