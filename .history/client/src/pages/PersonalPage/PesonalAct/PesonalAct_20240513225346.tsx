import React from 'react'
// import { Routes,Route } from "react-router-dom"
import ManagePostings from '../components/ManagePostings.tsx';
const PesonalAct = ({children}) => {
    // console.log({children});
    
  return (
    <div>
        PesonalAct
            <ManagePostings/>
        {children}
    </div>
  )
}

export default PesonalAct;