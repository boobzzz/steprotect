import React from 'react';
import * as R from 'ramda';

import footerLogo from '../../assets/logo/logo_footer.svg';
import * as Fa from 'react-icons/fa';
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
            <div className={classes.Wrapper}>
                <div id="contacts" className={classes.Logo}>
                    <a href="/">
                        <img src={footerLogo} alt=""/>
                    </a>
                    <p>
                        SteProtect - Проектування та встановлення сучасних систем
                        відеоспостереження та сигналізації для дому та бізнесу.
                        Підключення інтернету та GSM зв'язку в місцях з відсутнім
                        покриттям мережі.
                    </p>
                    <a href="/#" className={classes.Viber}>
                        <i><Fa.FaViber /><span>+38 (097) 769 97 99</span></i>
                    </a>
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
                                <a href="/#">
                                    <Fa.FaAngleRight /><i>{service}</i>
                                </a>
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
