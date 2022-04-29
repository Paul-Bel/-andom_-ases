import style from './ShowElement.module.scss'
import {useState} from "react";

let boardName = 'your text will appear here'
let buttonShow = 'Show Element'
let buttonRemove = 'Remove Elements'
export const ShowElement = () => {
    const [title, setTitle] = useState<string>(buttonShow)
    const [text, setText] = useState<string>(boardName)
    const [value, setValue] = useState<string>('')
    const onClickHandler = (id:number) => {
        if(id === 0) {
            title === buttonShow ? setTitle(buttonRemove) : setTitle(buttonShow)
        }
        if (id ===1){
            if(value) {
                setText(value)
                setValue('')
            }else{setText(boardName)}
        }
    }
    return (
        <div className={style.showContainer}>
            <div className={style.showElement}>
                {title !== buttonShow && <>
                    {(!text) ? <span className={style.text}/>
                    : <span className={style.text}>{text}</span>}
                    <div><i>{(!text) ? 'type text' : 'sent'}</i>
                    <input value={value} onChange={(e)=> {
                        setValue((e.currentTarget.value.length > 30) ? value : e.currentTarget.value)
                        setText(boardName)
                    }} placeholder={'enter text'}/>
                    </div>
                    <button onClick={()=>onClickHandler(1)}>{(text===boardName) ? 'show' : 'reset'}</button></>}
            </div>
            <button className={style.button} onClick={()=>onClickHandler(0)}>
                {title}
            </button>
        </div>
    )
}