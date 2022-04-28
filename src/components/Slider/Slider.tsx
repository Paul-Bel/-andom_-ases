import {TrackDetails, useKeenSlider} from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import cat from './img/cat.jpg'
import clock from './img/clock.jpg'
import girl from './img/girl.jpg'
import see from './img/see.jpg'
import karelia from './img/Karelia.jpg'
import house from './img/house.jpg'
import tree from './img/tree.jpg'
import React from "react"
import "./Slider.css"

const images = [cat, clock, girl, see, karelia, house, tree]

export const Slider = () => {
    const [details, setDetails] = React.useState<TrackDetails | null>(null)

    const [sliderRef] = useKeenSlider<HTMLDivElement>({
        loop: true,
        detailsChanged(s) {
            setDetails(s.track.details)
        },
        initial: 2,
    })

    function scaleStyle(idx: number) {
        if (!details) return {}
        const slide = details.slides[idx]
        const scale_size = 0.7
        const scale = 1 - (scale_size - scale_size * slide.portion)
        return {
            transform: `scale(${scale})`,
            WebkitTransform: `scale(${scale})`,
        }
    }

    return (
        <div >
            <title className="title">Slider <br/>&#8656; only swipe &rArr; </title>
        <div ref={sliderRef} className={`keen-slider zoom-out slider`} style={{cursor: 'pointer'}}>
                {images
                    .map((img, i) => <div key={i} className="keen-slider__slide zoom-out__slide">
                            <div style={scaleStyle(i)}>
                                <img className="img" src={img} />
                            </div>
                        </div>)}
                </div>
        </div>
    )
}