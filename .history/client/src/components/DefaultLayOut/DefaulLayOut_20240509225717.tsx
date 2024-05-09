import React from 'react'
import Header from './Header/HeaderUse.tsx'
import Footer from './Footer/Footer.tsx'
 export default  function DefaultLayOut ({children}) {
  return (
    <div className='Page'>
        <Header/>
        <main className='mainPage min-h-[100vh]'>
          {children}
        </main>
        <Footer/>
    </div>
  )
}

