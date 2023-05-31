import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const SmallNav = (props) => {

    useEffect(()=>{
        console.log(props.open);
    },[props.open])

    return(
        <nav id="mobile-nav" className={props.open === true ? "menu-open" : "menu-close"}>
            <menu>
                <li><Link to="/">Home</Link></li>
                <li><HashLink smooth to="/#about-section">About</HashLink></li>
                <li><Link to="#">Menu</Link></li>
                <li><Link to="/reserve">Reserve</Link></li>
                <li><Link to="#">Log In</Link></li>
                <li><Link to="#" role="button" className="button-yellow">Order</Link></li>
            </menu>
        </nav>
    )
}

export default SmallNav;