import React from 'react'
import "./nav.css"
import { Link } from 'react-router-dom'


const Nav = () => {
  return (
    <div className='nav'>
        <div className="leftNav">
        <Link to="/home"><li>NAVBAR</li></Link>

          
        </div>
        <div className="rightNav">
          <Link to="/home"><li>Home</li></Link>
          <Link to="/product"><li>Product</li></Link>
          <Link to="/cart"><li>Add To Cart</li></Link>
            
            
            
        </div>
    </div>
  )
}

export default Nav