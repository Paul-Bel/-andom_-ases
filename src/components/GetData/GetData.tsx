import style from './GetData.module.scss'
import axios from "axios";
import {useEffect, useState} from "react";
import {Preloader} from "../preloader/Preloader";
import {Alert} from "../preloader/Alert";

type DataType = {
    "id": string,
    "name": string,
    "city": string,
    "phone": string,
    "email": string,
    "photo": string,
}
type LoadType = 'load' | 'loaded' | ''
let url: string = 'https://data-server-contacts.herokuapp.com/users'

export const GetData = () => {
    const [users, setUsers] = useState<Array<DataType>>()
    const [isLoad, setIsload] = useState<LoadType>('')
    useEffect(() => {
        setIsload('load')
        axios.get(url).then((res) => {
            setUsers(res.data)
            if (res) {
                setIsload('loaded')
            }
        })
            .catch(() => {
                setIsload('')
                alert('сервер не доступен, попробуйте позже')
            })
        let clean = setTimeout(() => {
            setIsload('')
        }, 4000)
        return () => clearInterval(clean)
    }, [])
    return (
        isLoad === 'load' ? <Preloader/> :
            <div className={style.dataContainer}>
                {(isLoad === 'loaded') && <Alert/>}
                {users?.map((us, i) => {
                    return <div className={style.userContainer} key={i + us.id}>
                        <img className={style.img} src={us.photo} alt="ava"/>
                        <ul className={style.userItems}>
                            <li className={style.userItem}>Name<i>{us.name}</i></li>
                            <li className={style.userItem}>City<i>{us.city}</i></li>
                            <li className={style.userItem}>Phone<i>{us.phone}</i></li>
                            <li className={style.userItem}>Email<i>{us.email}</i></li>
                        </ul>
                    </div>
                })}
            </div>
    )
}
