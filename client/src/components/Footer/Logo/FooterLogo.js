import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { FaViber } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

import footerLogo from '../../../assets/logo/logo_footer.svg';
import { socials } from './socials';
import classes from './FooterLogo.module.css';

export const FooterLogo = () => {
    return (
        <div id="contacts" className={classes.Logo}>
            <Link smooth to="/#top">
                <img src={footerLogo} alt=""/>
            </Link>
            <p>
                SteProtect - проектування та встановлення сучасних систем
                відеоспостереження та сигналізації для дому та бізнесу.
                Підключення інтернету та GSM зв'язку в місцях з відсутнім
                покриттям мережі.
            </p>
            <div>
                <a href="viber://add?number=380676731457">
                    <i><FaViber /><span>+38 (068) 473 80 61</span></i>
                </a>
                <a href="mailto:steprotect.ua@gmail.com">
                    <i><FiMail /><span>steprotect.ua@gmail.com</span></i>
                </a>
            </div>
            <ul>
                {socials.map(social =>
                    <li key={social.id}>
                        <a
                            href={social.link}
                            target="_blank"
                            rel="noopener noreferrer">
                            <i>{social.icon}</i>
                        </a>
                    </li>
                )}
            </ul>
        </div>
    )
}