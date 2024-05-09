import React from 'react'
import s from './ContactButton.module.css'

export default function ContactButton({setModalOpen}) {
  
  const openModal = () => {
    setModalOpen(true)
  }

  return (
        <button className={s.contactBtn} onClick={openModal}>CONTACT US</button>
  )
}