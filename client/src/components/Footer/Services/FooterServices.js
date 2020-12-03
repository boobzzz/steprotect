import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { connect } from 'react-redux';
import { getSlider } from '../../Main/Services/redux/selectors';
import { FaAngleRight } from 'react-icons/fa';

import { services } from './services';
import classes from './FooterServices.module.css';

const FooterServices = ({ slider }) => {
    const moveToSlide = (i) => {
        return slider !== null ? slider.slickGoTo(i) : null
    }

    return (
        <div className={classes.Services}>
            <h2>Наші послуги</h2>
            <ul>
                {services.map((service, i) =>
                    <li key={service}>
                        <Link
                            smooth
                            to="/#services"
                            onClick={() => moveToSlide(i)}>
                            <FaAngleRight /><span>{service}</span>
                        </Link>
                    </li>
                )}
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        slider: getSlider(state)
    }
}

export default connect(mapStateToProps)(FooterServices);