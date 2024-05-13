import React from 'react'
import Header from './Header/header.tsx'
import Footer from './Footer/Footer.tsx'
 export default  function DefaultLayOut ({children}) {
   
   console.log("hello");
   console.log( {children});
  return (
    <div className='Page relative bg-[#f5f5f5]'>
        <Header/>
        <main className='mainPage min-h-[100vh] pt-[80px] w-[1100px] mx-auto mt-[20px] t-[20px] '>
          {children}
        </main>
        <Footer/>
    </div>
  )
}

