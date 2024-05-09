import React from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import "./styles.css"
 export default  function DefaultLayOut ({children}) {
  return (
    <div className='Page'>
        <Header/>
        <main className='mainPage'>
          {children}
        </main>
        <Footer/>
    </div>
  )
}

