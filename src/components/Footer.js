import React from "react";
import LogoWhite from "../images/ll-logo-white.png";
import facebookIcon from "../images/icons/facebook-icon.png";
import twitterIcon from "../images/icons/twitter-icon.png";
import instaIcon from "../images/icons/instagram-icon.png";
import openTableIcon from "../images/icons/open-table-icon.png";
import tikTokIcon from "../images/icons/tiktok-icon.png";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
    return(
        <article id="footer">
            <span>
                <section>
                    <img src={LogoWhite} alt="Little Lemon Logo" id="footer-logo"/>
                    <h3>Little Lemon Restaurant</h3>
                    <p>
                    30 East 62nd Street <br />
                    Chicago, Illinois 10018
                    </p>
                </section>
                    <section>
                    <div id="contact-footer">
                        <h3>Contact</h3>
                        <p>
                            Telephone: &nbsp;
                            <a href="tel: +19999999999">999-999-9999</a>

                        </p>
                        <p>
                            Email: &nbsp;
                            <a href="mailto: littlelemon@gmail.com">littlelemon@gmail.com</a>
                        </p>
                    </div>
                    <div id="footer-menu">
                        <h3>Links</h3>
                        <menu>
                            <li><Link to="/">Home</Link></li>
                            <li><HashLink smooth to="/#about-section">About</HashLink></li>
                            <li><a href="#">Menu</a></li>
                            <li><Link to="/reserve">Reserve</Link></li>
                            <li><a href="#">Order Online</a></li>
                        </menu>
                    </div>
                </section>
                <section>
                    <h3>Social Media</h3>
                    <div id="social-icons">
                        <img src={facebookIcon} alt="Little Lemon Facebook Icon"/>
                        <img src={instaIcon} alt="Little Lemon Instagram Icon"/>
                        <img src={twitterIcon} alt="Little Lemon Twitter Icon"/>
                        <img src={tikTokIcon} alt="Little Lemon Tik Tok Icon"/>
                        <img src={openTableIcon} alt="Little Lemon Open Table Icon"/>
                    </div>
                </section>
            </span>
            <section>
                <p>Copyright © 2023 Little Lemon Restaurant. All rights Reserved</p>
            </section>
        </article>
    )
}

export default Footer;