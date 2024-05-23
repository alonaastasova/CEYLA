import React from 'react'
import s from './Photography.module.css'
import profilePicture from '../../media/photography/profilePicture.jpg'
import arrowDown from '../../media/photography/down_arrow.PNG'
import packOneTitle from '../../media/photography/package_one.PNG'
import packTwoTitle from '../../media/photography/package_two.PNG'
import packThreeTitle from '../../media/photography/package_three.PNG'
import packOneImg from '../../media/photography/first_package_image.jpg'
import packTwoImg from '../../media/photography/second_package_image.jpg'
import packThreeImg from '../../media/photography/third_package_image.jpg'
import weddPackTitle from '../../media/photography/wedding_pack.PNG'
import weddPackImg from '../../media/photography/wedding_pack_image.jpg'
import arrowRight from '../../media/photography/right_arrow.PNG'

export default function Photography({setModalOpen}) {

  const openModal = () => {
    setModalOpen(true)
  }

  return (
    <div>
      <section className={s.headBlock}>

        <div className={s.informBlock}>

          <div className={s.informBlock_left}>
            <h1>PHOTO{'\n'}GRAPHY </h1>
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
            <li><strong>Portrait sessions</strong> in stylish studio environments</li>
            <li><strong>Outdoor shoots</strong>, capturing cityscapes, parks, and museums</li>
            <li><strong>Boudoir photography</strong></li>
            <li><strong>Brand photography sessions</strong></li>
            <li><strong>Fashion photography</strong></li>
            <li><strong>Wedding / Love Story</strong></li>
            <p>We approach each client <strong>individually</strong> and can accommodate all your preferences.</p>
          </div>

        </div>

        <div className={s.aboutBlock}>

          <div className={s.aboutInfo}>
            <div className={s.aboutH5}><h5>ABOUT</h5></div>
            <div className={s.aboutProfPic}><img src={profilePicture} alt="DarjaPicture" /></div>
            <div className={s.aboutText}>
              <h6>PHOTOGRAPHER</h6>
              <p>Hey there! I'm <i>Darija</i>, a professional photographer with a wealth of experience. Having honed my craft in Germany working   with various companies, photography isn't just a job for me – it's my way of life. <br /> <br />
                <i>Capturing beauty through the lens of a professional is my passion.
                  I believe that every moment, every smile, and every glance holds its own unique beauty, waiting to be immortalized in a photograph.</i> <br /> <br />
                From candid street photography to timeless wedding shots, from studio portraits to heartwarming maternity sessions – I specialize in capturing life's most precious moments. With keen attention to detail and a commitment to excellence, I'll ensure that your memories are preserved in the most breathtaking way.
              </p>
            </div>
          </div>

          <div className={s.aboutBlockMarker}>
            <h1>EXPLORE <br /> OUR <br /> PRICING <br /> BELOW</h1>
            <img src={arrowDown} alt="ArrowToGoDown" />
          </div>

        </div>
      </section>

      <section className={s.packagesBlock}>

        <div className={s.packOne}>
          <img src={packOneTitle} alt="" />
          <div className={s.packOneInfo}>
            <img src={packOneImg} alt="FirstPackageImage" />
            <h1>EXPRESS</h1>
            <li>pre-session consultation (online)</li>
            <li>up to 60 min photo session</li>
            <li>studio rent included</li>
            <li>100 colored photos in 2 days after photo session</li>
            <li>all the best shots from the photo session</li>
            <li>retouch of 15 photos of your choice in 2 weeks</li>
            <li>online gallery with your photos</li>
            <h2>250€</h2>
          </div>
          <button onClick={openModal}>BOOK</button>
        </div>

        <div className={s.packTwo}>
          <img src={packTwoTitle} alt="" />
          <div className={s.packTwoInfo}>
            <img src={packTwoImg} alt="SecondPackageImage" />
            <h1>STANDARD</h1>
            <li>pre-session consultation (online)</li>
            <li>1,5-2 hours photo session</li>
            <li>studio rent included</li>
            <li>150 colored photos in 2 days after photo session</li>
            <li>all the best shots from the photo session</li>
            <li>retouch of 25 photos of your choice in 2 weeks</li>
            <li>online gallery with your photos</li>
            <h2>350€</h2>
          </div>
          <button onClick={openModal}>BOOK</button>
        </div>

        <div className={s.packThree}>
          <img src={packThreeTitle} alt="" />
          <div className={s.packThreeInfo}>
            <img src={packThreeImg} alt="ThirdPackageImage" />
            <h1>ALL INCLUDED</h1>
            <li>pre-session consultation (online)</li>
            <li>2 hours photo session</li>
            <li>makeup and hair artist on set</li>
            <li>studio rent included</li>
            <li>150 colored photos in 2 days after photo session</li>
            <li>all the best shots from the photo session</li>
            <li>retouch of 30 photos of your choice in 2-3 weeks</li>
            <li>2 short videos</li>
            <li>online gallery with your photos</li>
            <h2>550€</h2>
          </div>
          <button onClick={openModal}>BOOK</button>
        </div>

      </section>

      <section className={s.whatAboutBlock}>
        <p>All photo sessions in the packages above include studio time, and they can also take place at a location of your choice, such as museums, outdoor settings, and more. Other sessions like Fashion, Brand, Love Story, Content, etc., are discussed separately, with prices varying based on your preferences. Additionally, we're available for photo and video shoots in other countries, which can also be arranged!</p>
      </section>

      <section className={s.weddingBlock}>
        <div className={s.weddingContainer}>
          <div className={s.weddingContainerInfo}>
            <h1>WEDDING PHOTOGRAPHY</h1>
            <p>Your wedding day is a culmination of love, dreams, and promises—a momentous occasion that deserves to be cherished for a lifetime. At CEYLA, we understand the significance of this day in the lives of both the bride and groom.</p>
            <p>We are committed to capturing every heartfelt moment, every stolen glance, and every joyous celebration. We believe in becoming more than just photographers; we become part of your journey, sharing in your excitement and emotions.</p>
            <p>With a range of packages tailored to suit your needs, we offer flexible options for every couple. Whether you envision a simple ceremony followed by a leisurely stroll through picturesque landscapes or desire comprehensive coverage from dawn till dusk, including both photography and videography, we have a package that's perfect for you.</p>
            <p><strong>Our prices are designed to be as delightful as our photos, ensuring that exceptional quality remains accessible to all. Get in touch with us today, and let's create a personalized package that aligns perfectly with your vision and budget.</strong></p>
            <h2>Because at CEYLA, we don't just capture moments;
              we capture memories that last a lifetime.
            </h2>
          </div>

          <div className={s.weddingContainerPackage}>

            <div className={s.weddingPack}>
              <img src={weddPackTitle} alt="WeddingPack" />
              <div className={s.weddingPackInfo}>
                <img src={weddPackImg} alt="WeddingPackImage" />
                <li>pre-session consultation</li>
                <li>3-12 hours photo session</li>
                <li>all the best shots from the photo session</li>
                <li>retouch of 25-50 photos of your choice in 8-12 weeks (depends on Package)</li>
                <li>online gallery with your photos</li>
                <h2>Prices and services on request</h2>
              </div>
              <button onClick={openModal}>CONTACT</button>
            </div>

          </div>
        </div>
      </section>

      <section className={s.importantBlock}>
        <div className={s.grig}>
          <div className={s.impB1}>
            <h1>IMPORTANT <br /> TO KNOW!!!</h1>
            <img src={arrowRight} alt="ArrowToRight" className={s.arrowRight} />
          </div>

          <div className={s.impB2}>
            <h6><strong>DOWN PAYMENT</strong></h6>
            <p>30% deposit is required for each photoshoot to reserve a date. The rest of the amount is to be paid on the day of the session.</p>
            <h6><strong>PACKAGES INCLUDES</strong></h6>
            <li>All packages include consultation and assistance with posing during the session.</li>
            <li>All inquiries and concepts are discussed in advance.</li>
          </div>

          <div className={s.impB3}>
            <h6><strong>RETOUCH | PHOTO EDITING</strong></h6>
            <li>Photos for retouching must be selected within 1 week of receiving the images.</li>
            <li>Approximate photo retouching turnaround time is 2 weeks.</li>
            <li>Rush photo editing incurs double the standard fee.</li>
            <h6><strong>VIDEO | REELS</strong></h6>
            <p>Video shooting can be booked separately for each session for an additional fee.</p>
          </div>

          <div className={s.impB4}>
            <h6><strong>DATA PROTECTION</strong></h6>
            <p>Your photos may be used for portfolio purposes. If you prefer otherwise, please inform us in advance.</p>
            <h6><strong>WEDDING</strong></h6>
            <p>For wedding photography bookings, please contact us separately. This is negotiated separately.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
