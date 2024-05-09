import React from 'react'
import Header from './Header/header'
import Footer from './Footer/footer'
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

