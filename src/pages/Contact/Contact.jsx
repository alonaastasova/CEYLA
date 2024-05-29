import React from 'react'
import s from './Contact.module.css'
import mapImg from '../../media/contact/map.png'
import darija from '../../media/contact/darija.png'
import andrej from '../../media/contact/andrej.png'
import logo from '../../media/contact/logo.PNG'
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


export default function Contact() {

  const MailtoLink = () => {
    const emailAddress = 'ceyla.media@gmail.com';
    const subject = 'Subject of the email';

    const mailtoLink = `mailto:${emailAddress}?subject=${subject}`;

    return (
      <a href={mailtoLink}>Send Email</a>
    );
  };

  return (
    <div>
      <div className={s.textBlock}>
        <h1>UNLOCK YOUR POTENTIAL WITH US - WHERE DREAMS BECOME REALITY!</h1>
      </div>

      <div className={s.contactBlock}>

        <div className={s.contactLeft}>
          <div className={s.leftTextBlock}>
            <div className={s.text}>
              <h2>We are located in Latvia | Riga</h2>
              <p><i>We also operate in other countries such as</i></p>
            </div>
            <div className={s.buttons}>
              <button>DUBAI</button>
              <button>PARIS</button>
              <button>MILAN</button>
              <button>MUNICH</button>
              <button>BERLIN</button>
              <button>MIAMI</button>
            </div>
          </div>
          <div className={s.leftImgBlock}>
            <img src={mapImg} alt="mapImage" />
          </div>
        </div>

        <div className={s.contactRight}>

          <div className={s.links}>
            <p>GET IN TOUCH WITH US</p>
            <a href="https://www.instagram.com/ceyla_media" target="_blank" rel="noreferrer">@ceyla_media</a>
            <MailtoLink />
          </div>

          <div className={s.profiles}>
            <div className={s.andrejProfile}>
              <div className={s.andrejImgBlock}>
                <img src={andrej} alt="AndrejProfileImg" />
                <p>Andrejs</p>
              </div>
              <div className={s.andrejContacts}>
                <p>+49-159-01040954</p>
                <a href="https://www.instagram.com/androshkatv/" target="_blank" rel="noreferrer">@androshkatv</a>
                <div className={s.profileIcons}>
                  <FaTiktok />
                  <FaInstagram />
                  <FaYoutube />
                </div>
              </div>
            </div>
            <div className={s.darijaProfile}>
              <div className={s.darijaImgBlock}>
                <img src={darija} alt="DarijaProfileImg" />
                <p>Darija</p>
              </div>
              <div className={s.darijaContacts}>
                <p>+49-176-80544292</p>
                <a href="https://www.instagram.com/miss.darija/" target="_blank" rel="noreferrer">@miss.darija</a>
                <div className={s.profileIcons}>
                  <FaTiktok />
                  <FaInstagram />
                  <FaYoutube />
                </div>
                <div></div>
              </div>
            </div>
          </div>
          
          <div className={s.anotherText}>
            <h3>Let us capture your special moments. Whether it's a wedding, a family gathering, or a corporate event, we're here to make memories last.</h3>
            <h4>Contact us today - we'd love to meet you!</h4>
          </div>
        </div>

      </div>

      <div className={s.contactLogo}>
        <img src={logo} alt="CeylaLogo" />
      </div>
    </div>
  )
}
