import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

import ModalContainer from '../UI/Modal/Modal';
import FormOrder from '../Form/Order/FormOrder';
import classes from './Header.module.css';
import logoVr from '../../assets/logo/logo_vr_r.svg';
import logoHr from '../../assets/logo/logo_hr.svg';

// const BASEPATH = '/steprotect/'

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
                                <Link to="top" smooth={true} duration={1000}>
                                    головна
                                </Link>
                            </li>
                            <li>
                                <Link to="about" smooth={true} duration={1000}>
                                    про нас
                                </Link>
                            </li>
                            <li>
                                <Link to="services" smooth={true} duration={1000}>
                                    послуги
                                </Link>
                            </li>
                            <li>
                                <a href="/steprotect/#" onClick={toggleModal}>
                                    замовити
                                </a>
                            </li>
                            <li>
                                <Link to="contacts" smooth={true} duration={1000}>
                                    контакти
                                </Link>
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
