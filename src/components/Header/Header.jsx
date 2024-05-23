import React from "react";
import s from './Header.module.css'
import weblogo from '../../media/logo-menu.png'
import { FaInstagram } from "react-icons/fa";
import { NavLink } from "react-router-dom";



export default function Header() {

    return (
        <header>
            <div className={s.website_logo}>
                <NavLink to={'/'}><img src={weblogo} alt="LOGO" /></NavLink>
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

                <div className={s.header_social}>
                    <NavLink to={'https://www.instagram.com/ceyla_media'} target="_blank" rel="noopener noreferrer" className={s.instIco}><FaInstagram /></NavLink>
                </div>

            </nav>
        </header>
    )
}