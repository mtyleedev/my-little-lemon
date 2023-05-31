import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Nav = () => {
    return(
        <nav id="widescreen-nav">
            <menu>
                <li><Link to="/">Home</Link></li>
                <li><HashLink smooth to="/#about-section">About</HashLink></li>
                <li><a to="#">Menu</a></li>
                <li><Link to="/reserve">Reserve</Link></li>
                <li><a to="#" role="button" className="ghost-button-primary">Order</a></li>
                <li><a to="#">Log In</a></li>
            </menu>
        </nav>
    )
}

export default Nav;

