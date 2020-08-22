import React from 'react';

import SectionHeader from '../../UI/SectionHeader/SectionHeader';
import ServicesSlider from './Slider/ServicesSlider';

import classes from './Services.module.css';

const Services = (props) => {
    return (
        <section id="services" className={classes.Services}>
            <div className={classes.Wrapper}>
                <SectionHeader
                    section="Послуги"
                    title="Що ми пропонуємо"
                    titleColor="#fff"/>
                <ServicesSlider />
            </div>
        </section>
    )
}

export default Services;
