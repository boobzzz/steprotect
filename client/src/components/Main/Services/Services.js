import React from 'react';

import { SectionHeader } from '../../UI/SectionHeader/SectionHeader';
import ServicesSlider from './Slider/ServicesSlider';
import classes from './Services.module.css';

export const Services = () => {
    return (
        <section id="services" className={classes.Services}>
            <div className="wrapper">
                <SectionHeader
                    section="Послуги"
                    title="Що ми пропонуємо"
                    titleColor="#fff" />
                <ServicesSlider />
            </div>
        </section>
    )
}