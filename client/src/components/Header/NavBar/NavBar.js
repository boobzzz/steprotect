import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const NavBar = ({ toggle, close }) => {
    return (
        <nav>
            <ul>
                <li>
                    <Link smooth to="/#top" onClick={close}>
                        головна
                    </Link>
                </li>
                <li>
                    <Link smooth to="/#about" onClick={close}>
                        про нас
                    </Link>
                </li>
                <li>
                    <Link smooth to="/#services" onClick={close}>
                        послуги
                    </Link>
                </li>
                <li>
                    <Link to="/" onClick={toggle}>
                        замовити
                    </Link>
                </li>
                <li>
                    <Link to="/blog" onClick={close}>
                        блог
                    </Link>
                </li>
                <li>
                    <Link smooth to="/#contacts" onClick={close}>
                        контакти
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;
