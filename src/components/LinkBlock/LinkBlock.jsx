import React from 'react'
import s from './LinkBlock.module.css'

export default function LinkBlock() {
  return (
    <div className={s.mainBlock}>
      <div className={s.linkBlock}>
        <a href="/" className={s.button}>Fashion</a>
      </div>
      <div className={s.linkBlock}>
        <a href="/" className={s.button}>Models</a>
      </div>
      <div className={s.linkBlock}>
        <a href="/" className={s.button}>Brands</a>
      </div>
    </div>
  )
}
