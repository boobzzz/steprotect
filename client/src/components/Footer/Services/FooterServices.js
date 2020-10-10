import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { connect } from 'react-redux';
import * as S from '../redux/selectors';

import * as Fa from 'react-icons/fa';
import classes from './FooterServices.module.css';

const services = [
    'Відеоспостереження',
    'Виявлення систем стеження',
    'Охоронна сигналізація',
    'Системи доступу',
    'Комп\'ютерні мережі',
    'GSM зв\'язок'
]

const FooterServices = (props) => {
    const { slider } = props

    const moveToSlide = (i) => {
        return props.slider !== null
               ? slider.slickGoTo(i)
               : null
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
                            <Fa.FaAngleRight /><span>{service}</span>
                        </Link>
                    </li>
                )}
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        slider: S.getSlider(state)
    }
}

export default connect(mapStateToProps)(FooterServices);
