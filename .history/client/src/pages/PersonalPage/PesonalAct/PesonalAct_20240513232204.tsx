import React from 'react'
import { Routes,Route } from "react-router-dom"
import ManagePostings from '../components/ManagePostings.tsx';
const PesonalAct = ({children}) => {
    // console.log({children});
    
  return (
    <div>
        PesonalAct
        <Route path="/personal/ManagePostings/*">
            <Routes>
                <ManagePostings />
            </Routes>
        </Route>
        {children}
    </div>
  )
}

export default PesonalAct;