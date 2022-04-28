import s from './NavBar.module.scss'
import {NavLink} from "react-router-dom";
import React from "react";

export const NavBar = () => {
    
    return (
        <nav className={s.headerContainer}>
            <NavLink to={"/Slider"} className={s.activeLink}>Slider</NavLink>
            <NavLink to={"/Canvas"} className={s.activeLink+' '+s.screen}>Canvas</NavLink>
            <NavLink to={"/Video"} className={s.activeLink}>Video</NavLink>
            <NavLink to={"/GetData"} className={s.activeLink}>GetData</NavLink>
            <NavLink to={"/Squares"} className={s.activeLink}>Squares</NavLink>
            <NavLink to={"/Blocks"} className={s.activeLink}>Blocks</NavLink>
        </nav>
    )
}


