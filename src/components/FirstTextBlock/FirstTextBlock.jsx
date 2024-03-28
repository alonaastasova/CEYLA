import React from 'react'
import s from './FirstTextBlock.module.css'
import logoq from '../../media/logo-quote.png'

export default function FirstTextBlock() {
  return (
    <div className={s.first_text_block}>
      <div className={s.text}>
        <p>Transcending time through the lens, imprinting memories on screens and souls.</p>
      </div>

      <div className={s.logo}>
        <img src={logoq} alt="logo" />
      </div>
    </div>
  )
}