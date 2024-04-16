import React from 'react'
import s from './Portfolio.module.css'
import ph01 from '../../media/portf01.jpg'
import ph02 from '../../media/portf02.jpg'
import ph03 from '../../media/portf03.jpg'
import ph04 from '../../media/portf04.jpg'
import ph05 from '../../media/portf05.jpg'
import ph06 from '../../media/portf06.jpg'
import ph07 from '../../media/portf07.jpg'
import ph08 from '../../media/portf08.jpg'
import vid01 from '../../media/portfvid01.mp4'
import vid02 from '../../media/portfvid02.mp4'
import vid03 from '../../media/portfvid03.mp4'
import vid04 from '../../media/portfvid04.mp4'



export default function Portfolio() {
    return (
        <div className={s.portfolioMainBlock}>

            <div className={s.portfolioInfo}>
                <div className={s.textBlock}>
                    <h1>PORTFOLIO</h1>
                    <h3>PHOTOGRAPHY | VIDEOGRAPHY</h3>
                    <p>Step into a realm of opulence and allure, where each image is a masterpiece crafted with precision
                        and finesse. From haute couture to high-end brands, we elevate the essence of luxury through
                        captivating visuals that epitomize sophistication and glamour. Indulge in our portfolio and immerse
                        yourself in a world where beauty knows no bounds.</p>
                </div>
                <div className={s.imageBlock}>
                    
                </div>
            </div>

            <div className={s.portfolioGallery}>
                <div class={s.media}><img src={ph01} alt="image01" /></div>
                <div class={s.media}><img src={ph02} alt="image02" /></div>
                <div class={s.media}><img src={ph03} alt="image03" /></div>
                <div class={s.media}><img src={ph04} alt="image04" /></div>
                <div class={s.media}><img src={ph05} alt="image05" /></div>
                <div class={s.media}><img src={ph06} alt="image06" /></div>
                <div class={s.media}><img src={ph07} alt="image07" /></div>
                <div class={s.media}><img src={ph08} alt="image08" /></div>
            </div>
            <div className={s.videogalery}>
                <div class=''><iframe width="560" height="315" src={vid01} frameborder="0" allowfullscreen></iframe></div>
                <div class=''><iframe width="560" height="315" src={vid02} frameborder="0" allowfullscreen></iframe></div>
                <div class=''><iframe width="560" height="315" src={vid03} frameborder="0" allowfullscreen></iframe></div>
                <div class=''><iframe width="560" height="315" src={vid04} frameborder="0" allowfullscreen></iframe></div>
            </div>

        </div>
    )
}
