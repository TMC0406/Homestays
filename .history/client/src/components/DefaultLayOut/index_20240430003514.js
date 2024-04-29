import React from 'react'
import Header from './Header'
import Footer from './Footer'
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

