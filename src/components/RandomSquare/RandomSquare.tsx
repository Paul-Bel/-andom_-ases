import style from './RandomSquare.module.scss'
import {useEffect, useState} from "react";
import arrow from '../../img/kisspng-arrow-red.png'

export const RandomSquare = () => {
    const [titleButton, setTitleButton] = useState<{title: string, count: number}>({title:'', count: 0})
    const state = Math.ceil(Math.random() * 100)
    const [element, setElement] = useState<Array<number>>([])
    useEffect(() => {
        onClickHandler()
    }, [])
    const onClickHandler = () => {
        let titleName = titleButton.count === 1 ? 'click me again' : titleButton.count > 1 ?  'you can click again' : 'click me'
        setTitleButton({...titleButton, count: titleButton.count+1, title: titleName})
        let arr = []
        for (let i = 0; i < (state < 10 ? 10 : state); i++) {
            arr.push(state)
        }
        setElement(arr)
    }
    return (
        <div className={style.squareContainer}>
            <div className={style.squares}>
                {element.map((div, i) => {
                    let R = Math.ceil(Math.random() * 100)
                    let G = Math.ceil(Math.random() * 100)
                    let B = Math.ceil(Math.random() * 100)
                    return <div key={i} className={style.square}
                                style={{backgroundColor: `rgba(${R}, ${G}, ${B}, 0.7)`}}>{i + 1}</div>
                })}
            </div>
            <button className={style.button} onClick={onClickHandler}>
                {titleButton.title}
            </button>
            <div className={style.line} style={{backgroundImage: `url(${arrow})`}}/>
        </div>
    )
}