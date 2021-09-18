import React from 'react'
import './navbar.scss'
import { useState, useEffect } from 'react';
const Navbar = () => {
    const [show,setshow] = useState(false);
    const transitionNavBar = () => {
        if(window.scrollY > 100){
            setshow(true)
        }else{
            setshow(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll",transitionNavBar);
        return () => window.removeEventListener("scroll",transitionNavBar);
    },[]);

    return (
        <div className={`${show && 'nav'}`}>
            <div className="nav__content">
                <img className="nav__content__logo" src="https://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c529.png" alt="logo"/>
                <img className="nav__content__ava" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="ava" />
            </div>
        </div>
    )
}

export default Navbar
