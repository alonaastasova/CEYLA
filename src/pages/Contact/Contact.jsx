import React from 'react'
import s from './Contact.module.css'


export default function Contact() {
  return (
    <div>
      <div className={s.textBlock}>
        <h1>UNLOCK YOUR POTENTIAL WITH US - WHERE DREAMS BECOME REALITY!</h1>
      </div>

      <div className={s.contactBlock}>
        <div className={s.contactLeft}>
          <img src="" alt="Map_image" />
        </div>
        <div className={s.contactRight}>
          <img src="" alt="Contact_right_block_inform" />
        </div>
      </div>

      <div className={s.contactLogo}></div>
    </div>
  )
}
