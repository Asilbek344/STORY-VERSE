import React from 'react'
import "./Header.css"
import Logo from "./Imeges/Logo.jpg"
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <header>
            <div className="container header-cn">
                <img className='header-jpg' src={Logo} alt="" />
                <ul>
                    <li>< Link to="Home" >Home</Link ></li>
                    <li><Link to="About"  >About</ Link ></li>
                    <li>< Link to="Contact"  >Contact</ Link  ></li>
                </ul>
            </div>
        </header>
    )
}

export default Header
