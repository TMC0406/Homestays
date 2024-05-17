import React from 'react'
import {BrowserRouter as Router , Routes,Route } from "react-router-dom"
import {routes} from "./routes/index.js"
import DefaultLayOut from './components/DefaultLayOut/DefaultLayOut.tsx'
 const App = () => {
  // console.log(personalRoutes)
  return (
    <div className="App">
       <Router>
          <Routes>
            {
              routes.map((it)=>{
                const Page = it.page;
                const Layout = it.isShowHeader ? DefaultLayOut : ({ children }) => <div>{children}</div>;
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