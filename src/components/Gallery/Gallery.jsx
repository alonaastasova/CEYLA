import React, { useEffect } from 'react';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';
import s from './Gallery.module.css';

export default function Gallery(props) {
  
  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: '#' + props.galleryID,
      children: 'a',
      pswpModule: () => import('photoswipe'),
    });
    lightbox.init();

    return () => {
      lightbox.destroy();
      lightbox = null;
    };
  }, [props.galleryID]);

  return (
    <div className={s.galleryDiv} id={props.galleryID}>
      {props.images.map((image, index) => (
        <div className={s.photoCard} key={props.galleryID + '-' + index}>
          <a
            href={image.src}
            data-pswp-width={image.width}
            data-pswp-height={image.height}
            // key={props.galleryID + '-' + index}
            target="_blank"
            rel="noreferrer"
          >
            <img src={image.src} alt=""/>
          </a>
        </div>
      ))}
    </div>
  );
}
