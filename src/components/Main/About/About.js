import React from 'react';
import * as Fa from 'react-icons/fa';
import * as Bs from 'react-icons/bs';
import * as Io from 'react-icons/io';

import SectionHeader from '../../UI/SectionHeader/SectionHeader';

import classes from './About.module.css';

const abouts = [
    {
        id: 1,
        icon: <Fa.FaCertificate />,
        title: 'Якість',
        desc: 'Використовуємо виключно оригінальне, сертифіковане обладнання.'
    },
    {
        id: 2,
        icon: <Bs.BsShieldLockFill />,
        title: 'Надійність',
        desc: 'Більше 10 років успішного практичного досвіду на ринку.'
    },
    {
        id: 3,
        icon: <Io.IoIosCalculator />,
        title: 'Гнучкість',
        desc: 'Підберемо оптимальну цінову пропозицію відповідно до заданого бюджету.'
    }
]

const About = (props) => {
    return (
        <section id="about" className={classes.About}>
            <div className={classes.Wrapper}>
                <SectionHeader
                    section="Про нас"
                    title="Чому ми?"
                    titleColor="#222"/>
                <div className={classes.Item}>
                    {abouts.map(about =>
                        <div key={about.id}>
                            <div>{about.icon}</div>
                            <h3>{about.title}</h3>
                            <p>{about.desc}</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default About;
