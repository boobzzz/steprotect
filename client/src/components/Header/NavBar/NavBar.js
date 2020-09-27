import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const NavBar = ({ clicked }) => {
    return (
        <nav>
            <ul>
                <li><Link smooth to="/#top">головна</Link></li>
                <li><Link smooth to="/#about">про нас</Link></li>
                <li><Link smooth to="/#services">послуги</Link></li>
                <li><Link to="/" onClick={clicked}>замовити</Link></li>
                <li><Link to="/blog">блог</Link></li>
                <li><Link smooth to="/#contacts">контакти</Link></li>
            </ul>
        </nav>
    )
}

export default NavBar;
