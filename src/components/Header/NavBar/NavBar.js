import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';

const NavBar = ({ clicked }) => {
    return (
        <nav>
            <ul>
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
                    <Link to="top" smooth={true} duration={500} onClick={clicked}>
                        замовити
                    </Link>
                </li>
                <li>
                    <NavLink to="/blog">
                        блог
                    </NavLink>
                </li>
                <li>
                    <Link to="contacts" smooth={true} duration={1000}>
                        контакти
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;
