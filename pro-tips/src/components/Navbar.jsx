import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{display:"flex",justifyContent:"space-between",padding:"30px 1px",marginBottom:"50px",backgroundColor:"black"}}>

        <Link to={"/"}>
            <h1>KALVIUM <img src="https://kalvium.community/images/sidebar-3d-logo.svg" alt="" /></h1>
        </Link>
        <div style={{display:"flex",justifyContent:"space-around"}}>
            <Link to="/contact">
            <h1 style={{margin:"0 50px"}}>Contact</h1>
            </Link> 
            <Link to="/form">
                <h1>Registration form</h1>
            </Link>
        </div>
        
    </div>
  )
}

export default Navbar