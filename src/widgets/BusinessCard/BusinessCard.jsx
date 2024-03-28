import React from 'react'
import s from './BusinessCard.module.css'
import instagramIcon from '../../media/instagramIcon.png'
import mailIcon from '../../media/mailIcon.png'
import whatsappIcon from '../../media/whatsappIcon.png'

export default function BusinessCard() {
  return (
    <div className={s.mainBlock}>
        <div className={s.firstBlock}>
            <p className={s.firstText}>Our contacts</p>
            <p className={s.secondText}>Ceyla</p>
        </div>
        <div className={s.secondBlock}>
            <div className={s.contactInfo}>
                <img src={instagramIcon} alt="instagramIcon" />
                <p>ceyla_media</p>
            </div>
            <div className={s.contactInfo}>
                <img src={mailIcon} alt="mailIcon" />
                <p>contact@ceylamedia.com</p>
            </div>
            <div className={s.contactInfo}>
                <img src={whatsappIcon} alt="whatsappIcon" />
                <p>+37120000000</p>
            </div>
        </div>
    </div>
  )
}
