import React from 'react'
import {NavLink, NavNavLink} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="nav-wrapper green brighten-3">
        <div className="container">
            <a className="brand-logo">Color Experts</a>
            <ul className="right">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/order">Order</NavLink></li>
                <li><NavLink to="/explore">Explore</NavLink></li>
                
            </ul>
        </div>
    </nav>
    )
}

export default Navbar