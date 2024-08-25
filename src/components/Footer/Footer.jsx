import React from 'react'
import s from './Footer.module.css'
import { FaHeart } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io5";
export default function Footer() {


  return (
    <div className={s.footer}>
      {/* <div className={s.contactBlock}>
        <BusinessCard />
      </div>
      <p className={s.footerCopyright}>&copy; 2024 Made by BUTOR GmbH</p> */}

      <hr />

      <div className={s.text}>
        <p>Feel free to write and call us. We really love to communicate with our clients</p><FaHeart />
      </div>


      <div className={s.ourContacts}>
        <div className={s.contactsH3}>
          <p>OUR CONTACTS</p>
        </div>
        <div className={s.socialMediaIcons}>
          <div className={s.instagram}>
            <IoLogoInstagram />
            <a href="https://www.instagram.com/ceyla_media" target="_blank" rel="noreferrer">ceyla_media</a>
          </div>
          <div className={s.mail}>
            <IoMailOutline />
            <a href="mailto:contact@ceylamedia.com">contact@ceylamedia.com</a>
          </div>
          <div className={s.whatsapp}>
          <a href="https://wa.me/37129505765" target="_blank" rel="noreferrer">
            <IoLogoWhatsapp />
            <p>+371 29505765</p>
            </a>
          </div>
        </div>
      </div>

      <div className={s.rights}>
        <p>&copy; Ceyla-Media 2024</p>
      </div>



    </div>
  )
}
