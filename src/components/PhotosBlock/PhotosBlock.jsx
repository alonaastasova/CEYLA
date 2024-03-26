import React from 'react'
import s from './PhotosBlock.module.css'
import ph1 from '../../media/home-portfolio-1.jpg'
import ph2 from '../../media/home-portfolio-2.jpg'
import ph3 from '../../media/home-portfolio-3.jpg'
import ph4 from '../../media/home-portfolio-4.jpg'
import ph5 from '../../media/home-portfolio-5.jpg'
import ph6 from '../../media/home-portfolio-6.jpg'
import ph7 from '../../media/home-portfolio-7.jpg'
import ph8 from '../../media/home-portfolio-8.jpg'
import ph9 from '../../media/home-portfolio-9.jpg'
import ph10 from '../../media/home-portfolio-10.jpg'

export default function PhotosBlock() {
  return (
    <div className={s.container}>
      <div className={s.item1}><img src={ph1} alt="ph1" /></div>
      <div className={s.item2}><img src={ph2} alt="ph2" /></div>
      <div className={s.item3}><img src={ph3} alt="ph3" /></div>
      <div className={s.item4}><img src={ph4} alt="ph4" /></div>
      <div className={s.item5}><img src={ph5} alt="ph5" /></div>
      <div className={s.item6}><img src={ph6} alt="ph6" /></div>
      <div className={s.item7}><img src={ph7} alt="ph7" /></div>
      <div className={s.item8}><img src={ph8} alt="ph8" /></div>
      <div className={s.item9}><img src={ph9} alt="ph9" /></div>
      <div className={s.item10}><img src={ph10} alt="ph10" /></div>
    </div>
  )
} 