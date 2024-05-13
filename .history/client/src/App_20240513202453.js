import React from 'react'
import {BrowserRouter as Router , Routes,Route } from "react-router-dom"
import {routes} from "./routes"
import DefaultLayOut from './components/DefaultLayOut/DefaulLayOut.tsx'
import PersonalPage from './pages/PersonalPage/PersonalPage.tsx'
import {personalRoutes} from "./routes/personalRoutes"
 const App = () => {
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
            {
                personalRoutes.map((it)=>{
                  const PageChild = it.PageChild;
                  const Layout = it.isShowHeader ? PersonalPage : ({ children }) => <div>{children}</div>;
                  return (
                    <Route key={it.path} path ={it.path}  element={
                    <Layout className='relative'>
                      < PageChild />
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