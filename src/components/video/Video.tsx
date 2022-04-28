import React, {MouseEvent, useState} from "react";
import style from './Video.module.scss'

let videoFile = 'https://media.istockphoto.com/videos/road-in-the-autumn-park-covered-with-fallen-yellow-leaves-video-id1345549389'
export const Video = () => {
    // const video = useRef<HTMLVideoElement>(null)
    const video = React.createRef<HTMLVideoElement>()
    let currentTime = video?.current?.currentTime

    const [isPlay, setIsPlay] = useState<boolean>(false)

    const onClickHandler = (e: MouseEvent<HTMLVideoElement>) => {
        const event = e.currentTarget
        isPlay ? event.play() : event.pause()
        setIsPlay(!isPlay)
        // console.log(Math.floor(e.currentTarget.currentTime))
    }


    return (
        <div className={style.videoContainer}>
            <title>Video</title>
            <video className={style.video} ref={video} src={videoFile} controls onClick={onClickHandler}  id={'progress'}/>
            <div>{currentTime}</div>
        </div>
    )
}
