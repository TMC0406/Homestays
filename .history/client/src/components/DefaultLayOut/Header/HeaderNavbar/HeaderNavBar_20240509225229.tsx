import React from 'react'
import {Link} from "react-router-dom"
const HeaderNavbar = () => {
  return (
   <div class="header-navbar">
        <ul class="header-list-nav flex justify-around">
            
            <Link to="/">
                <li>Home</li>
            </Link>
            <Link to="/favourite">
                <li>Favourite</li>
            </Link>
            <Link to="/NotFoundPage">
                <li>NotFoundPage</li>
            </Link>
            <Link to="/search">
                <li>SearchPage</li>
            </Link>
          
        </ul>
   </div>  
)
}

export default HeaderNavbar