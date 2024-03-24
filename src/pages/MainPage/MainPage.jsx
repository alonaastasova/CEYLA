import React from 'react'
import s from './MainPage.module.css'
import Preview from '../../components/Preview/Preview'
import FirstTextBlock from '../../components/FirstTextBlock/FirstTextBlock'
import PhotosBlock from '../../components/PhotosBlock/PhotosBlock'
import SecondTextBlock from '../../components/SecondTextBlock/SecondTextBlock'
import LinkBlock from '../../components/LinkBlock/LinkBlock'
import Footer from '../../components/Footer/Footer'



export default function MainPage() {
  return (
    <div className={s.main}>
            <Preview />
            <FirstTextBlock />
            <PhotosBlock />
            <SecondTextBlock />
            <LinkBlock />
            <Footer />
    </div>
  )
}
