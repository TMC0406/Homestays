import React from 'react'
import Header from './Header/Header.tsx'
import Footer from './Footer/Footer.tsx'
 export default  function DefaultLayOut ({children}) {
   
  return (
    <div className='Page relative bg-[#f5f5f5]'>
        <Header/>
        <main className='mainPage min-h-[100vh] w-[1100px] mx-auto mt-[110px] pt-[10px] '>
          {children}
        </main>
        <Footer/>
    </div>
  )
}

