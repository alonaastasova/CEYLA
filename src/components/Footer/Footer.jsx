import React from 'react'
import s from './Footer.module.css'
import BusinessCard from '../../widgets/BusinessCard/BusinessCard'

export default function Footer() {
  return (
    <div className={s.footer}>
      <div className={s.contactBlock}>
        <BusinessCard />
      </div>
      <p className={s.footerCopyright}>&copy; 2024 Made by BUTOR GmbH</p>
    </div>
  )
}
