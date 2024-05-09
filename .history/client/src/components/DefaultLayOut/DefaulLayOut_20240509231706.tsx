import React from 'react'
import Header from './Header/Header.tsx'
import Footer from './Footer/Footer.tsx'
 export default  function DefaultLayOut ({children}) {
  return (
    <div className='Page relative'>
        <Header/>
        <main className='mainPage min-h-[100vh]'>
          {children}
        </main>
        <Footer/>
    </div>
  )
}

