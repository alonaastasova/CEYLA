import React from 'react'
import s from './OurServices.module.css'
import leftBlockImg from '../../media/ourServices/leftBlockImg.png'

export default function OurServices() {
  return (
    <div>

      <section className={s.headBlock}>

        <div className={s.leftContainer}>
          <img src={leftBlockImg} alt="leftBlockImg" />
        </div>

        <div className={s.rightContainer}>

          <div className={s.rightContainerTextInfo}>
            <div className={s.rightTextBlock}></div>
            <div className={s.rightButtonBlock}></div>
          </div>

          <div className={s.rightContainerButtons}>

          </div>

        </div>

      </section>

    </div>
  )
}
