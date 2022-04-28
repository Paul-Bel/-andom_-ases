import style from './RandomSquare.module.scss'
import {useState} from "react";

export const RandomSquare = () => {
    const [title, setTitle] = useState<string>('click me')
    const state = Math.ceil(Math.random() * 100)
    const [element, setElement] = useState<Array<number>>([])

    const onClickHandler = () => {
        setTitle('click me again')
        let arr = []
        for (let i = 0; i < state; i++) {
            arr.push(state)
        }
        setElement(arr)
    }
    return (
        <div className={style.squareContainer}>
            <div className={style.squares}>
                {element.map((div, i) => {
                    let R = Math.ceil(Math.random() * 1000)
                    let G = Math.ceil(Math.random() * 1000)
                    let B = Math.ceil(Math.random() * 1000)
                    return <div key={i} className={style.square}
                                style={{backgroundColor: `rgba(${R}, ${G}, ${B}, 0.55)`}}>{i + 1}</div>
                })}
            </div>
            <button className={style.button} onClick={onClickHandler}>
                {title}
            </button>
            <div className={style.line}/>
        </div>
    )
}