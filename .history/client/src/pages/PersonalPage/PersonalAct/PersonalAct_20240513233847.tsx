import React from 'react'
// import { Routes,Route } from "react-router-dom"
// import ManagePostings from '../components/ManagePostings.tsx';
const PesonalAct = ({children}:any) => {
    console.log({children});
    
  return (
    <div>
        PesonalAct
        {/* <Routes>
            <Route path="/personal/ManagePostings/*">
                    <ManagePostings />
            </Route>
        </Routes> */}
        {children}
    </div>
  )
}

export default PesonalAct;