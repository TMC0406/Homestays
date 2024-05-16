import React from 'react'
import Header from './Header/Header.tsx'
import Footer from './Footer/Footer.tsx'
 export default  function DefaultLayOut ({children}) {
  return (
    <div className='Page'>
        <Header/>
        <main className='bg-[#f1f1f1] mainPage min-h-[100vh] pt-[70px] my-[10px]'>
          {children}
        </main>
        <Footer/>
    </div>
  )
}

