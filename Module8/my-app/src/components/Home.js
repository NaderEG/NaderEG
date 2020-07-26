import React from 'react'
import shopping_cart from "./MEDIA/shopping_cart.png"
import {NavLink, Link} from 'react-router-dom'
import explore from "./MEDIA/explore.png"

const Home = (props) => {
    return (
    <div className="container">
        <h4 className="center">Home</h4>
        <div className="row">
            <div className="card">
            <NavLink to="/order" className="inactive">
                <div className="center">
                    <img src={shopping_cart} alt={"Shopping Cart"}  width={"30%"} />
                </div>
                
                    <div className="container">
                        <h4><b>Order a Paint Job</b></h4>
                        <p>Specify color palette, measurements, location, and payment method.</p>
                    </div>
                </NavLink>
            </div>

            <div className="card">
            <NavLink to="/explore" className="inactive">
                <div className="center">
                    <img src={explore} alt={"Explore"}  width={"30%"} />
                </div>
                
                    <div className="container">
                        <h4><b>Explore</b></h4>
                        <p>Explore the various colors, palettes, and services offered by Color Experts.</p>
                    </div>
                </NavLink>
            </div>
        </div>
    </div>
    )
}

export default Home