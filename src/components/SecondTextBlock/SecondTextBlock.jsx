import React from 'react'
import s from './SecondTextBlock.module.css'

export default function SecondTextBlock() {
  return (
    <div className={s.textBlock}>
      <p className={s.text1}>Luxurious and exclusive photo and video productions</p>
      <p className={s.text2}>For brands, fashion and models</p>
    </div>
  )
}
