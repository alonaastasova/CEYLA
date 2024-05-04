import React from 'react'
import LazyLoad from 'react-lazyload';
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

  // const photoUrls = [ph1, ph2, ph3, ph4, ph5, ph6, ph7, ph8, ph9, ph10];
  // {
  //   photoUrls.map((url, index) => (
  //     <div key={`photo-${index}`} className={s[`item${index + 1}`]}>
  //       <img src={url} alt={`ph${index + 1}`} loading="lazy"/>
  //       </div>
  //     ))
  // }

  return (
    <div className={s.container}>
      <LazyLoad offset={100} className={s.lazyloadElem}>
        <div className={s.item}><img src={ph1} alt="ph1"/></div>
      </LazyLoad>
      <LazyLoad offset={100} className={s.lazyloadElem}>
      <div className={s.item}><img src={ph2} alt="ph2"/></div>
      </LazyLoad>
      <LazyLoad offset={100} className={s.lazyloadElem}>
      <div className={s.item}><img src={ph3} alt="ph3"/></div>
      </LazyLoad>
      <LazyLoad offset={100} className={s.lazyloadElem}>
      <div className={s.item}><img src={ph4} alt="ph4"/></div>
      </LazyLoad>
      <LazyLoad offset={100} className={s.lazyloadElem}>
      <div className={s.item}><img src={ph5} alt="ph5"/></div>
      </LazyLoad>
      <LazyLoad offset={100} className={s.lazyloadElem}>
      <div className={s.item}><img src={ph6} alt="ph6"/></div>
      </LazyLoad>
      <LazyLoad offset={100} className={s.lazyloadElem}>
      <div className={s.item}><img src={ph7} alt="ph7"/></div>
      </LazyLoad>
      <LazyLoad offset={100} className={s.lazyloadElem}>
      <div className={s.item}><img src={ph8} alt="ph8"/></div>
      </LazyLoad>
      <LazyLoad offset={100} className={s.lazyloadElem}>
      <div className={s.item}><img src={ph9} alt="ph9"/></div>
      </LazyLoad>
      <LazyLoad offset={100} className={s.lazyloadElem}>
      <div className={s.item}><img src={ph10} alt="ph10"/></div>
      </LazyLoad>
    </div>
  )
} 
