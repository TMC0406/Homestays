import React from 'react'
import Header from './Header/Header.tsx'
import Footer from './Footer/Footer.tsx'
 export default  function DefaultLayOut ({children}) {
  return (
    <div className='Page'>
        <Header/>
        <main className='mainPage min-h-[100vh] pt-[65px] w-[1100px] mx-auto'>
          {children}
        </main>
        <Footer/>
    </div>
  )
}

