import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import HamburgerMenu from 'react-hamburger-menu';

import { ModalContainer } from '../UI/Modal/Modal';
import { NavBar } from './NavBar/NavBar';
import { useHeader } from './useHeader';
import OrderService from '../Order/Service/OrderService';
import logoVr from '../../assets/logo/logo_vr.svg';
import logoHr from '../../assets/logo/logo_hr.svg';
import classes from './Header.module.css';

export const Header = () => {
    const { scrolled, open, modal, toggleMenu, toggleModal } = useHeader()

    const menuClass = open ? `${classes.Menu} ${classes.Show}` : classes.Menu

    return (
        <>
            <header className={scrolled ? classes.Fixed : null}>
                <div className="wrapper">
                    <div className={classes.Logo}>
                        <Link smooth to="/#top">
                            <img src={!scrolled ? logoVr : logoHr} alt=""/>
                        </Link>
                    </div>
                    <div className={menuClass}>
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
                modalBody={<OrderService />} />
        </>
    )
}