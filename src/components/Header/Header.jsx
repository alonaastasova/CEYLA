import React from "react";
import s from './Header.module.css'
import weblogo from '../../media/logo-menu.png'
import { FaInstagram } from "react-icons/fa";


export default function Header() {

    return (
        <header>
                <div className={s.website_logo}>
                    <img src={weblogo} alt="LOGO" />
                </div>

                <nav>
                    <ul>
                        <li><a href="/">HOME</a></li>
                        <li><a href="/">PHOTOGRAPHY</a></li>
                        <li><a href="/">VIDEO PRODUCTION</a></li>
                        <li><a href="/">PORTFOLIO</a></li>
                        <li><a href="/">OUR SERVICES</a></li>
                        <li><a href="/">CONTACT</a></li>
                    </ul>

                    <div className={s.header_social}>
                        <FaInstagram />
                    </div>

                    {/* <div className={s.divider}></div> */}
                </nav>
        </header>
    )
}