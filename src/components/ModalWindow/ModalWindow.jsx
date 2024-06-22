import React from "react";
import s from "./ModalWindow.module.css";
import cardPhoto from '../../media/cardPhoto.jpeg'
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaExclamation } from "react-icons/fa";

const ModalWindow = ({ modalOpen, setModalOpen }) => {

  return (
    <div
      className={`${s.modal} ${modalOpen ? s.open : ""}`}
    >
      <div className={s.modalContent} onClick={(e) => e.stopPropagation()}>
        {/* <h2 className={s.modalTitle}>Contact Form</h2> */}
        <p className={s.modalClose} onClick={() => setModalOpen(false)}>
          &times;
        </p>
        <div className={s.modalBody}>
          <div className={s.cardPhoto}>
            <img src={cardPhoto} alt="cardPhoto" />
          </div>
          <h3>CEYLA</h3>
          <p>PHOTOGRAPHY | VIDEOGRAPHY | CONTENT MARKETING</p>
          <a href="tel:+4917680544292">+4917680544292</a>
          <a href="mailto:contact@ceylamedia.com">contact@ceylamedia.com</a>
          <div className={s.contactLink}>
            <a href="https://www.instagram.com/ceyla_media" target="_blank" rel="noreferrer">
              <FaInstagram />
              Instagram
            </a>
            <a href="https://wa.me/4917680544292" target="_blank" rel="noreferrer">
              <FaWhatsapp />
              WhatsApp
            </a>
          </div>
          <p className={s.info}> <FaExclamation /> Don't forget to specify the service you're interested in, so we can process your message faster and get in touch with you for further actions. <br /> <br /> <FaRegHeart/> We're open to all suggestions and discussions, feel free to reach out to us and together we'll come to a common solution to achieve an unforgettable result and experience.</p>
        </div>
      </div>
    </div>
  );
};

export default ModalWindow;