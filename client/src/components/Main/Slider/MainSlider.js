import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import OrderCall from '../../../components/Order/Call/OrderCall';
import { slides } from './slides';
import './MainSlider.css';

export const MainSlider = () => {
    const [ animate, setAnimate ] = useState(true)

    const afterSlide = () => setAnimate(true)

    const beforeSlide = () => setAnimate(false)

    const settings = {
        afterChange: afterSlide,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        beforeChange: beforeSlide,
        className: 'MainSlider',
        pauseOnHover: true,
        speed: 2000
    }

    return (
        <section>
            <Slider {...settings}>
                {slides.map(slide =>
                    <div key={slide.id} className="MainSlide">
                        <img src={slide.bg} alt=""/>
                        <div className={animate
                                        ? 'Content animateIn'
                                        : 'Content animateOut'}>
                            <h1>{slide.title}</h1>
                            <p>{slide.desc}</p>
                            <OrderCall btn={slide.btn} />
                        </div>
                    </div>
                )}
            </Slider>
        </section>
    )
}