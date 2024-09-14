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
    
    // const [images, setImages] = useState([]); // Состояние для хранения изображений
    // const cloudName = 'dphfuwx1c'; // Ваш cloud name из Cloudinary
    // const collectionName = 'ceyla_portfolio'; // Имя коллекции или тега
  
    // useEffect(() => {
    //   const apiURL = `https://res.cloudinary.com/dphfuwx1c/image/list/ceyla_portfolio.json`;
    
    //   fetch(apiURL)
    //     .then(response => response.json())
    //     .then(data => {
    //     console.log('Данные из Cloudinary:', data);
    //       const fetchedImages = data.resources.map(image => ({
    //         url: image.secure_url,
    //         alt: image.public_id
    //       }));
    //       setImages(fetchedImages); // Устанавливаем изображения в состояние
    //     })
    //     .catch(error => console.error('Ошибка при загрузке изображений:', error));
    // }, []); // Пустой массив зависимостей [] означает, что useEffect сработает только при монтировании компонента

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

        {/* <div className="image-container" style={{ display: 'flex', flexWrap: 'wrap' }}>
            {images.map((image, index) => (
                <img
                    key={index}
                    src={image.url}
                    alt={image.alt}
                    style={{ width: '300px', margin: '10px' }} // Пример CSS-стилей
                />
            ))}
        </div> */}
        <h1 className={s.heading}>PHOTO</h1>

            <div className={s.container}>
                <h1 className={s.comingSoon}>Coming soon<span className={s.dots}>{dots}</span></h1>
            </div>

        <h1 className={s.heading}>VIDEO</h1>
        <div className={s.portfolio_video}>
            <iframe src="https://www.youtube.com/embed/HY6Wj3CiQ6I?si=vSPUmnn1hyhcInle" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <iframe src="https://www.youtube.com/embed/dmPlQ0UMPto?si=dWpQMLFiZ5DFYgwz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        </div>
    )
}
