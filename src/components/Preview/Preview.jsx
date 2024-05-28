import React from "react"
import s from './Preview.module.css'
import video from '../../media/ceyla_preview.mp4'



export default function Preview() {
    return (
        <div className={s.preview}>
            <video  autoPlay loop muted playsInline src={video}></video>
        </div>
    )
}