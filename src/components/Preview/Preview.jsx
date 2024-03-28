import React from "react"
import s from './Preview.module.css'
import video from '../../media/ceyla_preview.mp4'



export default function Preview() {
    return (
        <div className={s.preview}>
            {/* <header className={s.text}>Here need to be a short video preview for CEYLA website</header> */}
            <video  autoPlay loop muted src={video}></video>
        </div>
    )
}