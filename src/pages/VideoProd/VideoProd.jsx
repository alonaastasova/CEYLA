import React, { useState } from 'react'
import s from './VideoProd.module.css'
import checkboxIcon from '../../media/videoProd/checkboxIcon.png'
import doubleArrow from '../../media/videoProd/doubleArrowDownIcon.png'
import profilePicture from '../../media/videoProd/profilePicture.JPG'
import multipleArrow from '../../media/videoProd/multipleArrow.png'
import ReactPlayer from 'react-player';
import video1 from '../../media/videoProd/video1.mp4'
import video2 from '../../media/videoProd/video2.mp4'
import video3 from '../../media/videoProd/video3.mp4'
import video4 from '../../media/videoProd/video4.mp4'
import packOneTitle from '../../media/videoProd/weddingPackage.png'
import packTwoTitle from '../../media/videoProd/cinematicPackage.png'
import packThreeTitle from '../../media/videoProd/eventPackage.png'
import packOneImg from '../../media/videoProd/packageOneImg.png'
import packTwoImg from '../../media/videoProd/packageTwoImg.png'
import packThreeImg from '../../media/videoProd/packageThreeImg.png'
import arrowRight from '../../media/photography/right_arrow.PNG'

export default function VideoProd() {

  const [video1Playing, setVideo1Playing] = useState(false);
  const [video2Playing, setVideo2Playing] = useState(false);
  const [video3Playing, setVideo3Playing] = useState(false);
  const [video4Playing, setVideo4Playing] = useState(false);

  const handleVideo1Click = () => {
    setVideo1Playing((prevState) => !prevState);
    setVideo2Playing(false);
    setVideo3Playing(false);
    setVideo4Playing(false);
  };

  const handleVideo2Click = () => {
    setVideo2Playing((prevState) => !prevState);
    setVideo1Playing(false);
    setVideo3Playing(false);
    setVideo4Playing(false);
  };

  const handleVideo3Click = () => {
    setVideo3Playing((prevState) => !prevState);
    setVideo1Playing(false);
    setVideo2Playing(false);
    setVideo4Playing(false);
  };

  const handleVideo4Click = () => {
    setVideo4Playing((prevState) => !prevState);
    setVideo1Playing(false);
    setVideo2Playing(false);
    setVideo3Playing(false);
  };

  return (
    <div>
      <section className={s.headBlock}>
        <div className={s.informBlock}>

          <div className={s.informBlock_left}>
              <h1>VIDEO<br />PRODUCTION</h1>
              <hr />
              <h6>OUR SERVICES AND PRICES</h6>
          </div>
          <div className={s.informBlock_right}>
            <h6>VARIETIES OF VIDEOGRAPHY SESSIONS WE OFFER:</h6>
            <div className={s.checkList}>
              <img src={checkboxIcon} alt="checkboxIcon" />
              <p><strong>YouTube Video:</strong> Crafting high-quality content for your YouTube channel that engages and retains viewers.</p>
            </div>
            <div className={s.checkList}>
              <img src={checkboxIcon} alt="checkboxIcon" />
              <p><strong>TikTok Video:</strong> Innovative and creative videos tailored specifically for the TikTok platform to capture the attention of a younger audience.</p>
            </div>
            <div className={s.checkList}>
              <img src={checkboxIcon} alt="checkboxIcon" />
              <p><strong>Reels:</strong> Captivating short-form videos for Instagram Reels to increase your organic reach and strengthen your online presence.</p>
            </div>
            <div className={s.checkList}>
              <img src={checkboxIcon} alt="checkboxIcon" />
              <p><strong>Portrait Video:</strong> Personalized portrait videos that highlight your personality and style in a dynamic format.</p>
            </div>
            <div className={s.checkList}>
              <img src={checkboxIcon} alt="checkboxIcon" />
              <p><strong>Music Clip:</strong> Creative music videos that bring your music to life and help attract new fans.</p>
            </div>
            <div className={s.checkList}>
              <img src={checkboxIcon} alt="checkboxIcon" />
              <p><strong>Commercial:</strong> Professional video advertisements crafted with your brand and target audience in mind to boost visibility and sales.</p>
            </div>
            <div className={s.checkList}>
              <img src={checkboxIcon} alt="checkboxIcon" />
              <p><strong>Wedding Film:</strong> Videographic memories of your special day, captured with love and attention to detail to preserve your memories for a lifetime.</p>
            </div>
            <div className={s.checkList}>
              <img src={checkboxIcon} alt="checkboxIcon" />
              <p>Additionally, we also offer video editing services and professional videography to ensure your project looks its best and is executed with meticulous care.</p>
            </div>
          </div>
        </div>

        <div className={s.aboutBlock}>
          <div className={s.aboutInfo}>
            <div className={s.aboutH5}><h5>ABOUT</h5></div>
            <div className={s.aboutProfPic}><img src={profilePicture} alt="AndrejsPicture" /></div>
            <div className={s.aboutText}>
              <h6>VIDEOGRAPHER</h6>
              <p>Hey there, I'm <strong>Andrejs</strong> – a creative content maker, professional videographer, and blogger with over a decade of experience. Ever since I first picked up a camera, my goal has been to craft amazing videos that captivate and inspire audiences.
              <br/><br/>
              With over two million subscribers, I've learned what truly makes a video stand out. My editing and filming skills span everything from commercial projects to wedding ceremonies, from love stories to music videos.
              <br/><br/>
              Whatever story you want to tell – be it family moments, significant events, or promoting your brand – I'm ready to take on the challenge and turn your ideas into stunning visual masterpieces. There's nothing more rewarding to me than helping you achieve your goals and inspiring your audience.
              <br/><br/>
              Let's create something incredible together. Get in touch with me today, and let's bring your boldest ideas to life!
              </p>
            </div>
          </div>
          <div className={s.aboutSecondBlock}>
            <div className={s.text1}>
              <p>We approach each client <strong>individually</strong> and can accommodate all your preferences.</p>
              <img src={doubleArrow} alt="doubleArrow" />
            </div>
            <div className={s.text2}>
              <h4>Commercial Video</h4>
              <p>
                ● advertisement ● web and social content video <br />
                ● video courses ● product and services presentations ● reels
              </p>
              <span>Please contact for prices</span>
            </div>
          </div>
        </div>
      </section>
      <p className={s.portfolioLine}>PORTFOLIO</p>
      <section className={s.portfolioBlock}>
        <img src={multipleArrow} alt="multipleArrow" />
        <div className={s.videoDiv}>
          <ReactPlayer 
            url={video1}
            playing={video1Playing}
            muted
            loop
            className={video1Playing ? s.videoPlaying : s.video}
            width="640"
            height="360"
            onClick={handleVideo1Click}
          />
          <ReactPlayer 
            url={video2}
            playing={video2Playing}
            muted
            loop
            className={video2Playing ? s.videoPlaying : s.video}
            width="640"
            height="360"
            onClick={handleVideo2Click}
          />
          <ReactPlayer 
            url={video3}
            playing={video3Playing}
            muted
            loop
            className={video3Playing ? s.videoPlaying : s.video}
            width="640"
            height="360"
            onClick={handleVideo3Click}
          />
          <ReactPlayer 
            url={video4}
            playing={video4Playing}
            muted
            loop
            className={video4Playing ? s.videoPlaying : s.video}
            width="640"
            height="360"
            onClick={handleVideo4Click}
          />
        </div>
        <img src={multipleArrow} alt="multipleArrow" />
      </section>
      <p className={s.priceLine}>
        PRICES
        <span>SEASON 2024</span>
      </p>
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
          <button>BOOK</button>
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
          <button>BOOK</button>
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
          <button>BOOK</button>
        </div>

      </section>
      <section className={s.importantBlock}>
          <div className={s.impBTitle}>
            <h1>IMPORTANT <br /> TO KNOW</h1>
            <img src={arrowRight} alt="ArrowToRight" className={s.arrowRight} />
          </div>

          <div className={s.impBList}>
            <li>A 30% deposit is required for each video shoot.</li>
            <li>All pricing packages include consultation and assistance with posing during the video shoot.</li>
            <li>Approximate video processing time: 2 weeks.</li>
            <li>Rush video processing incurs double the standard fee.</li>
            <li>Your videos may be utilized for portfolio purposes. If you prefer otherwise, please notify us in advance.</li>
            <li>Photography can be booked alongside each video shoot for an additional fee.</li>
            <li>All queries and concepts are discussed in advance.</li>
            <li>Studio rental is not included in package prices.</li>
          </div>
      </section>
    </div>
  )
}
