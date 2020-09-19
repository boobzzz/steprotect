import React from 'react';
import * as R from 'ramda';
import { Link } from 'react-scroll';

import footerLogo from '../../assets/logo/logo_footer.svg';
import * as Fa from 'react-icons/fa';
import * as Fi from 'react-icons/fi';
import classes from './Footer.module.css';

const socials = [
    {id: 1, icon: <Fa.FaFacebookF />},
    {id: 2, icon: <Fa.FaInstagram />}
]
const services = [
    'Відеоспостереження',
    'Охоронна сигналізація',
    'Системи доступу',
    'Інтернет',
    'GSM зв\'язок'
]
const imgCount = 6

const Footer = (props) => {
    return (
        <footer>
            <div className="wrapper">
                <div id="contacts" className={classes.Logo}>
                    <Link to="top" smooth={true} duration={1000}>
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
                                <a href="/#"><i>{social.icon}</i></a>
                            </li>
                        )}
                    </ul>
                </div>
                <div className={classes.Services}>
                    <h2>Наші послуги</h2>
                    <ul>
                        {services.map(service =>
                            <li key={service}>
                                <Link to="services" smooth={true} duration={1000}>
                                    <Fa.FaAngleRight /><i>{service}</i>
                                </Link>
                            </li>
                        )}
                    </ul>
                </div>
                <div className={classes.Articles}>
                    <h2>Цікаві статті</h2>
                    <div>
                        {R.range(1, imgCount + 1).map(item =>
                            <a href="/#" key={item}>
                                <img src={require(`../../assets/images/footer-work-1-${item}.png`)} alt=""/>
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
