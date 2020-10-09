import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import footerLogo from '../../../assets/logo/logo_footer.svg';
import * as Fa from 'react-icons/fa';
import * as Fi from 'react-icons/fi';
import classes from './FooterLogo.module.css';

const socials = [
    {
        id: 1,
        icon: <Fa.FaFacebookF />,
        link: "https://www.facebook.com/SteProtect-%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D0%B8-%D0%B1%D0%B5%D0%B7%D0%BF%D0%B5%D0%BA%D0%B8-111437237394913/"
    },
    {
        id: 2,
        icon: <Fa.FaInstagram />,
        link: ""
    }
]

const FooterLogo = (props) => {
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
                    <i><Fa.FaViber /><span>+38 (067) 673 14 57</span></i>
                </a>
                <a href="mailto:steprotect.ua@gmail.com">
                    <i><Fi.FiMail /><span>steprotect.ua@gmail.com</span></i>
                </a>
            </div>
            <ul>
                {socials.map(social =>
                    <li key={social.id}>
                        <a href={social.link}><i>{social.icon}</i></a>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default FooterLogo;
