import React from 'react'
import s from './BusinessCard.module.css'
import instagramIcon from '../../media/instagramIcon.png'
import mailIcon from '../../media/mailIcon.png'
import whatsappIcon from '../../media/whatsappIcon.png'

export default function BusinessCard() {
  return (
    <div className={s.mainBlock}>
        <div className={s.firstBlock}>
            <p>Our contacts</p>
            <p>Ceyla</p>
        </div>
        <div className={s.secondBlock}>
            <div>
                <img src={instagramIcon} alt="instagramIcon" />
                <p>ceyla_media</p>
            </div>
            <div>
                <img src={mailIcon} alt="mailIcon" />
                <p>contact@ceylamedia.com</p>
            </div>
            <div>
                <img src={whatsappIcon} alt="whatsappIcon" />
                <p>+37120000000</p>
            </div>
        </div>
    </div>
  )
}
