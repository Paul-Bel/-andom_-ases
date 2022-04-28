import './Blocks.css'
import {useEffect, useRef} from "react";

export const Blocks = () => {
    //А) с помощью JS
    let ref = useRef<HTMLDivElement>(null)
    useEffect(() => {ref.current?.classList.add("jsStyle")},[])


    return (
        <div className={'blocksContainer'} >

            <div className={'variant'} ref={ref}>
                <div className='variant jsStyle'><title>А) с помощью JS</title></div>
            </div>
            <div className='variant jsStyle'>
                <div id={'CSS'}><title>Б) с помощью CSS</title></div>
            </div>
            <div className={'variant'}
                 style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <div id={'HTML'}><title>В) используя только HTML</title></div>
            </div>

        </div>
    )
}