import React from 'react';

import { SectionHeader } from '../../UI/SectionHeader/SectionHeader';
import { abouts } from './abouts';
import classes from './About.module.css';

export const About = () => {
    return (
        <section id="about" className={classes.About}>
            <div className="wrapper">
                <SectionHeader
                    section="Про нас"
                    title="Чому ми?"
                    titleColor="#222" />
                <div className={classes.Item}>
                    {abouts.map(about =>
                        <div key={about.id}>
                            <div>{about.icon}</div>
                            <h4>{about.title}</h4>
                            <p>{about.desc}</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}