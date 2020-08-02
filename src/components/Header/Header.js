import React, { useState, useEffect } from 'react';

import classes from './Header.module.css';
import logoVr from '../../assets/logo/logo_vr.svg';
import logoHr from '../../assets/logo/logo_hr.svg';

const Header = (props) => {
    const [ scrolled, setScrolled ] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            const isTop = window.scrollY > 180
            isTop ? setScrolled(true) : setScrolled(false)
        })
    }, [])

    return (
        <>
            <header className={scrolled ? classes.Fixed : null}>
                <div className={classes.Wrapper}>
                    <div className={classes.Logo}>
                        <img src={!scrolled ? logoVr : logoHr} alt=""/>
                    </div>
                    <nav className={classes.Menu}>
                        <ul className={classes.MenuList}>
                            <li>
                                <a href="/#">головна</a>
                            </li>
                            <li>
                                <a href="/#">про нас</a>
                            </li>
                            <li>
                                <a href="/#">послуги</a>
                            </li>
                            <li>
                                <a href="/#">замовити</a>
                            </li>
                            <li>
                                <a href="/#">контакти</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
            <section className={classes.Banner}></section>
        </>
    )
}

export default Header;
