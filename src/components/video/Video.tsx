import {MouseEvent, useEffect, useRef, useState} from "react";
import style from './Video.module.scss'

let videoFile = 'https://media.istockphoto.com/videos/road-in-the-autumn-park-covered-with-fallen-yellow-leaves-video-id1345549389'
export const Video = () => {
    const video = useRef<HTMLVideoElement>(null)
    let currentTime = video.current?.currentTime

    const [isPlay, setIsPlay] = useState<boolean>(false)
    const [time, setTime] = useState<number | undefined>(0)

    useEffect(() => {
        setTime(currentTime)
        console.log(11)
    }, [time])

    const onClickHandler = (e: MouseEvent<HTMLVideoElement>) => {
        const event = e.currentTarget
        isPlay ? event.play() : event.pause()
        setIsPlay(!isPlay)
        setTime(e.currentTarget.currentTime)

        // console.dir(e.currentTarget)
        // console.log(Math.floor(e.currentTarget.currentTime))
    }
    return (
        <div className={style.videoContainer}>
            <video className={style.video} ref={video} src={videoFile} onClick={onClickHandler} controls/>
        </div>
    )
}
