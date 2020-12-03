import React from 'react';

import { FooterLogo } from './Logo/FooterLogo';
import FooterServices from './Services/FooterServices';
import { FooterArticles } from './Articles/FooterArticles';
import './Footer.css';

export const Footer = () => {
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