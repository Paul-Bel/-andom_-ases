import style from './ShowElement.module.scss'
import {useState} from "react";

export const ShowElement = () => {
    const [title, setTitle] = useState<string>('Show Element')
    const [text, setText] = useState<string>('')
    const [value, setValue] = useState<string>('')
    const onClickHandler = (id:number) => {
        if(id === 0) {
            title === 'Show Element' ? setTitle('remove elements') : setTitle('Show Element')
        }
        if (id ===1){
            setText(value)
            setValue('')
        }
    }
    return (
        <div className={style.showContainer}>
            <div className={style.showElement}>
                {title !=='Show Element' && <>
                    {(!text) ? <span className={style.text}/>
                    : <span className={style.text}>{text}</span>}
                    <div><i>{(!text) ? 'type text' : 'sent'}</i>
                    <input value={value} onChange={(e)=> {
                        setValue((e.currentTarget.value.length > 30) ? value : e.currentTarget.value)
                        setText('')
                    }}/>
                    </div>
                    <button onClick={()=>onClickHandler(1)}>{(!text) ? 'show' : 'reset'}</button></>}
            </div>
            <button className={style.button} onClick={()=>onClickHandler(0)}>
                {title}
            </button>
        </div>
    )
}