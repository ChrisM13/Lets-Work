import React from 'react'
import {Link} from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
    return(
        <header>
          <h1>  <Link className='home-link' to="/"> Lets Work</Link> 
                <Link to="/checkout">Cart</Link>
          </h1>

         </header>
    )
}

export default NavBar