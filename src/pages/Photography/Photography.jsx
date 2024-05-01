import React from 'react'
import s from './Photography.module.css'

export default function Photography() {
  return (
    <div>
      <section className={s.headBlock}>

        <div className={s.informBlock}>

          <div className={s.informBlock_left}>
            <h1>PHOTOGRAPHY </h1>
            <h6>OUR SERVICES AND PRICES</h6>
            <div className={s.informBlock_left_btns}>
              <button>PORTRAIT</button>
              <button>BOUDOIR</button>
              <button>WEDDING</button>
              <button>FASHION</button>
              <button>STREET STYLE</button>
              <button>CONTENT</button>
            </div>
          </div>

          <div className={s.informBlock_right}>
            <h6>VARIETIES OF PHOTOGRAPHY SESSIONS WE OFFER:</h6>
            <li>Portrait sessions in stylish studio environments</li>
            <li>Outdoor shoots, capturing cityscapes, parks, and museums</li>
            <li>Boudoir photography</li>
            <li>Brand photography sessions</li>
            <li>Fashion photography</li>
            <li>Wedding / Love Story</li>
            <p>We approach each client individually and can accommodate all your preferences.</p>
          </div>
        </div>

        <div className={s.aboutBlock}>
          <div></div>
          <div></div>
        </div>
      </section>
    </div>
  )
}
