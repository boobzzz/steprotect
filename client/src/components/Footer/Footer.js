import React from 'react';

import FooterLogo from './Logo/FooterLogo';
import FooterServices from './Services/FooterServices';
import FooterArticles from './Articles/FooterArticles';
import './Footer.css';

const Footer = (props) => {
    return (
        <footer>
            <div className="wrapper">
                <FooterLogo />
                <FooterServices />
                <FooterArticles />
            </div>
        </footer>
    )
}

export default Footer;
