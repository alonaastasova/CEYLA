import React, { useEffect, useState } from 'react'
import s from './Portfolio.module.css'
import 'photoswipe/style.css';
// import Gallery from '../../components/Gallery/Gallery'
// import { portfolioImg } from '../../data/portfolioImg';

export default function Portfolio() {

    const [dots, setDots] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            setDots((prevDots) => (prevDots.length < 3 ? prevDots + '.' : ''));
        }, 500);

        return () => clearInterval(interval);
    }, []);

    return (
        // <div className={s.portfolioMainBlock}>

        //     <div className={s.portfolioInfo}>
        //         <div className={s.textBlock}>
        //             <h1>PORTFOLIO</h1>
        //             <h3>PHOTOGRAPHY | VIDEOGRAPHY</h3>
        //             <p>Step into a realm of opulence and allure, where each image is a masterpiece crafted with precision
        //                 and finesse. From haute couture to high-end brands, we elevate the essence of luxury through
        //                 captivating visuals that epitomize sophistication and glamour. Indulge in our portfolio and immerse
        //                 yourself in a world where beauty knows no bounds.</p>
        //         </div>
        //         <div className={s.imageBlock}>

        //         </div>
        //     </div>

        //     <Gallery 
        //         galleryID="portfolio_gallery"
        //         images={portfolioImg}
        //     />
        // </div>
        <div>
            <div className={s.textBlock}>
                <h1>PORTFOLIO</h1>
                <h3>PHOTOGRAPHY | VIDEOGRAPHY</h3>
                <p>Step into a realm of opulence and allure, where each image is a masterpiece crafted with precision
                    and finesse. From haute couture to high-end brands, we elevate the essence of luxury through
                    captivating visuals that epitomize sophistication and glamour. Indulge in our portfolio and immerse
                    yourself in a world where beauty knows no bounds.</p>
            </div>

            <div className={s.container}>
                <h1 className={s.comingSoon}>Coming soon<span className={s.dots}>{dots}</span></h1>
            </div>
        </div>

    )
}