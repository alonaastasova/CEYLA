import React from 'react'
import s from './OurServices.module.css'
import headImg from '../../media/ourServices/headIMG.PNG'
import redBorder from '../../media/ourServices/redBorder.png'
import whiteBorder from '../../media/ourServices/whiteBorder.png'

export default function OurServices() {

  const timestamp = Date.now() + new Date().getMilliseconds();

  const priceName = [
    {
      name: 'LOGO DESIGN',
      price: 'from 100€'
    },
    {
      name: 'BUSINES CARD DESIGN',
      price: 'from 50€'
    },
    {
      name: 'FLYERS | BRUCHURES DESIGN',
      price: 'from 50€'
    },
    {
      name: 'TRI-FOLD BRUCHURES DESIGN',
      price: 'from 80€'
    },
    {
      name: 'POSTER DESIGN',
      price: 'from 50€'
    },
    {
      name: 'BANNERS DESIGN',
      price: 'from 50€'
    },
    {
      name: 'BDOOR HANGERS DESIGN',
      price: 'from 50€'
    },
    {
      name: 'POST CARD DESIGN',
      price: 'from 30€'
    },
  ]

  const custonPrice = [
    {
      name: 'IMAGES | GRAPHICS',
      price: '4 images from 50€'
    },
    {
      name: 'INSTAGRAM MANAGMENT MOUNTHLY',
      price: 'from 300€'
    },
    {
      name: 'VIDEO (REELS, SHORTS, TIKTOK) EDITING',
      price: 'from 100€ for 1 video'
    }
  ]

  return (
    <div>

      <section className={s.headBlock}>

        <div className={s.leftContainer}>

          <div className={s.leftContainerImageBlock}>
            <img src={headImg} alt="leftBlockImg" />
          </div>

          <div className={s.leftContainerTextBlock}>
            <div className={s.leftContBlock}>
              <div className={s.leftContTextList}>
                <li><strong>CONTENT CREATION</strong></li>
                <li><strong>MARKETING</strong></li>
                <li><strong>HIGH QUALITY DESIGN</strong></li>
                <li><strong>VIDEO EDITING</strong></li>
                <li><strong>SOCIAL MEDIA IMAGES & GRAPHICS</strong></li>
              </div>
              <div className={s.leftContText}>
                <div className={s.textInLeftContBlock}><p>We also create content for social media, offer Instagram managment, and provide many other services.</p></div>
              </div>
            </div>
            <div className={s.socialMediaText}><p>SOCIAL <br /> MEDIA</p></div>
          </div>

        </div>

        <div className={s.rightContainer}>

          <div className={s.rightContainerTextInfo}>
            <div className={s.rightTextBlock}>
              <h1>OUR SERVICES</h1>
              <p>We offer a comprehensive range of services, from photography and videography to managing Instagram accounts and designing graphics for your logo, flyers, and brochures. We can create stunning content for you and your business. You can find our complete list of services below. Don't hesitate to reach out to us with any requests.</p>
            </div>
            <div className={s.navButtons}>
              <button>PHOTOGRAPHY</button>
              <button>VIDEO PRODUCTION</button>
            </div>
          </div>

          <div className={s.rightContainerButtons}>
            <h2>Graphics & design for your business:</h2>
            <div className={s.buttonsBlock}>
              <button>LOGO DESIGN</button>
              <button>BUSINES CARD</button>
              <button>FLYERS</button>
              <button>BANNERS</button>
              <button>POSTERS</button>
              <button>TRI-FOLD BROCHURES</button>
              <button>DOOR HANGERS</button>
              <button>POST CARDS</button>
            </div>
          </div>

        </div>

      </section>

      <section className={s.pricesBlock}>

        <div className={s.pricesLeftBlock}>
          <div className={s.ourPricesVertical}>
            <p>OUR PRICES</p>
          </div>
          <div className={s.ourPricesList}>
            <img src={whiteBorder} alt="" />
            <div className={s.pricesList}>
              {
                priceName.map(({ name, price }, index) => (
                  <div className={s.productItem} key={timestamp + '-' + index}>
                    <p>{name}</p>
                    <hr />
                    <span className={s.price}><strong>{price}</strong></span>
                  </div>
                ))
              }

              <br />
              <p>CUSTOM DESIGN OF SOCIAL MEDIA</p>

              {
                custonPrice.map(({ name, price }, index) => (
                  <div className={s.productItem} key={timestamp + '-' + index}>
                    <p>{name}</p>
                    <hr />
                    <span className={s.price}><strong>{price}</strong></span>
                  </div>
                ))
              }
            </div>
          </div>
        </div>

        <div className={s.pricesRightBlock}>
          <img src={redBorder} alt="" />
          <p>All prices depend on your preferences and the level of complexity. You can contact us, and we'll make you a great offer. If you're interested in multiple services, we offer attractive discounts.</p>
        </div>

      </section>

    </div>
  )
}
