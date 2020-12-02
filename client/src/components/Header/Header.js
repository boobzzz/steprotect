import React, { useState, useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import HamburgerMenu from 'react-hamburger-menu';

import NavBar from './NavBar/NavBar';
import FormOrder from '../Form/Order/FormOrder';
import ModalContainer from '../UI/Modal/Modal';
import classes from './Header.module.css';

import logoVr from '../../assets/logo/logo_vr.svg';
import logoHr from '../../assets/logo/logo_hr.svg';

const Header = (props) => {
    const [ scrolled, setScrolled ] = useState(false)
    const [ open, setOpen ] = useState(false)
    const [ modal, setModal ] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            const isTop = window.scrollY > 1
            isTop ? setScrolled(true) : setScrolled(false)
        })
    }, [])

    const toggleMenu = () => setOpen(!open)

    const toggleModal = () => {
        setModal(!modal)
        setOpen(false)
    }

    return (
        <>
            <header className={scrolled ? classes.Fixed : null}>
                <div className="wrapper">
                    <div className={classes.Logo}>
                        <Link smooth to="/#top">
                            <img src={!scrolled ? logoVr : logoHr} alt=""/>
                        </Link>
                    </div>
                    <div className={open
                                    ? `${classes.Menu} ${classes.Show}`
                                    : classes.Menu}>
                        <HamburgerMenu
                            isOpen={open}
                            menuClicked={toggleMenu}
                            width={40}
                            height={20}
                            strokeWidth={4}
                            color="#FF0000"
                            animationDuration={0.3}
                            className={classes.Hamburger} />
                        <NavBar toggle={toggleModal} />
                        <NavBar toggle={toggleModal} close={toggleMenu} />
                    </div>
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
