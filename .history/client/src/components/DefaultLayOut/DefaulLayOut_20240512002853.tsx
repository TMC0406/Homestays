import React from 'react'
import Header from './Header/Header.tsx'
import Footer from './Footer/Footer.tsx'
 export default  function DefaultLayOut ({children}) {
  return (
    <div className='Page'>
        <Header/>
<<<<<<< HEAD:.history/client/src/components/DefaultLayOut/DefaulLayOut_20240512002853.tsx
        <main className='mainPage min-h-[100vh] pt-[65px] w-[1100px] mx-auto'>
=======
        <main className='bg-[#f1f1f1] mainPage min-h-[100vh] pt-[70px]'>
>>>>>>> 02d14a1e1332087e96df965f78416600dec0ec7c:client/src/components/DefaultLayOut/DefaulLayOut.tsx
          {children}
        </main>
        <Footer/>
    </div>
  )
}

