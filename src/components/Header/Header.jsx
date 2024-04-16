import React from "react";
import s from './Header.module.css'
import weblogo from '../../media/logo-menu.png'
import { FaInstagram } from "react-icons/fa";
import { NavLink } from "react-router-dom";



export default function Header() {

    return (
        <header>
                <div className={s.website_logo}>
                    <img src={weblogo} alt="LOGO" />
                </div>

                <nav>
                    <div className={s.navLinks}>
                        <NavLink to={'/'}>HOME</NavLink>
                        <NavLink to={'/photography'}>PHOTOGRAPHY</NavLink>
                        <NavLink to={'/videoproduction'}>VIDEO PRODUCTION</NavLink>
                        <NavLink to={'/portfolio'}>PORTFOLIO</NavLink>
                        <NavLink to={'/ourservices'}>OUR SERVICES</NavLink>
                        <NavLink to={'/contact'}>CONTACT</NavLink>
                    </div>
                    {/* <ul> */}
                        {/* <li><a href="/">HOME</a></li>
                        <li><a href="/photography">PHOTOGRAPHY</a></li>
                        <li><a href="/videoproduction">VIDEO PRODUCTION</a></li>
                        <li><a href="/portfolio">PORTFOLIO</a></li>
                        <li><a href="/ourservices">OUR SERVICES</a></li>
                        <li><a href="/contact">CONTACT</a></li> */}
                    {/* </ul> */}

                    <div className={s.header_social}>
                        <FaInstagram />
                    </div>

                    {/* <div className={s.divider}></div> */}
                </nav>
        </header>
    )
}