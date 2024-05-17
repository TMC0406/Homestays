import React, { Fragment } from 'react'
import {BrowserRouter as Router , Routes,Route } from "react-router-dom"
import {routes} from "./routes"
import DefaultLayOut from './components/DefaultLayOut/DefaulLayOut.tsx'
 const App = () => {
  return (
    <div className="App">
       <Router>
          <Routes>
            {
              routes.map((it)=>{
                const Page = it.page;
                const Layout = it.isShowHeader ? DefaultLayOut : ({ children, ...props }) => <React.Fragment {...props}>{children}</React.Fragment>;
                return (
                  <Route key={it.path} path ={it.path}  element={
                  <Layout className='relative'>
                    < Page />
                  </Layout>
                }/>
                )
              })
            }
          </Routes>
        </Router>
    </div>
  )
}
export default App