import React from 'react'
import {BrowserRouter as Router , Routes,Route } from "react-router-dom"
import {routes} from "./routes/index.js"
import DefaultLayOut from './components/DefaultLayOut/DefaultLayOut.tsx'
import {personalRoutes} from "./routes/personalRoutes"
import PersonalPage from './pages/PersonalPage/PersonalPage.tsx'
import Footer from './components/DefaultLayOut/Footer/Footer.tsx'
import Header from './components/DefaultLayOut/Header/Header.tsx'
 const App = () => {
  // console.log(personalRoutes)
  return (
    <div className="App">
       <Router>
          <Routes>
                {
                  routes.map((it)=>{
                    const Page = it.page;

                const Layout = ({ children }) => {
                  return (
                    <div className="relative">
                      {it.isShowHeader && <Header />}
                      <div className={`mainPage min-h-[100vh]w-[1100px]
                       ${it.isShowHeader && it.isShowFooter ? "pt-[80px]  mx-auto mt-[20px]" : ""} `}>{children}</div>
                      {it.isShowFooter && <Footer />}
                    </div>
                  );
                };
                // it.isShowHeader && it.isShowFooter ? DefaultLayOut : ({ children }) => <div>{children}</div>;
                return (
                  <Route key={it.path} path ={it.path}  element={
                  <Layout className='relative'>
                    < Page />
                  </Layout>
                }/>
                )
              })
            }
             {personalRoutes.map((it) => {
            const PageChild = it.PageChild;
                return (
                  <Route key={it.path} path={it.path} element={
                    <PersonalPage>
                    < PageChild />
                  </PersonalPage>
                    }
                  />
                );
          })}
          </Routes>
        </Router>
    </div>
  )
}
export default App