import React, { useState, useEffect } from 'react';

import ModalContainer from '../UI/Modal/Modal';
import FormOrder from '../Form/Order/FormOrder';
import classes from './Header.module.css';
import logoVr from '../../assets/logo/logo_vr_r.svg';
import logoHr from '../../assets/logo/logo_hr.svg';

const Header = (props) => {
    const [ scrolled, setScrolled ] = useState(false)
    const [ modal, setModal ] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            const isTop = window.scrollY > 180
            isTop ? setScrolled(true) : setScrolled(false)
        })
    }, [])

    const toggleModal = () => setModal(!modal)

    return (
        <>
            <header className={scrolled ? classes.Fixed : null}>
                <div className={classes.Wrapper}>
                    <div className={classes.Logo}>
                        <a href="/">
                            <img src={!scrolled ? logoVr : logoHr} alt=""/>
                        </a>
                    </div>
                    <nav className={classes.Menu}>
                        <ul className={classes.MenuList}>
                            <li>
                                <a href="/">
                                    головна
                                </a>
                            </li>
                            <li>
                                <a href="#about">
                                    про нас
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    послуги
                                </a>
                            </li>
                            <li>
                                <a href="/#" onClick={toggleModal}>
                                    замовити
                                </a>
                            </li>
                            <li>
                                <a href="#contacts">
                                    контакти
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
            <ModalContainer
                modal={modal}
                toggle={toggleModal}
                title="Замовлення"
                modalBody={<FormOrder />} />
        </>
    )
}

export default Header;
