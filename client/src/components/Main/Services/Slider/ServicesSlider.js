import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { passRefAction } from '../redux/actions';

import { slides } from './slides';
import './ServicesSlider.css';

const settings = {
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    className: 'Slider',
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1
            }
        },
    ]
}

const ServicesSlider = ({ passRef }) => {
    const sliderRef = useCallback((el) => passRef(el), [passRef])

    return (
        <Slider ref={sliderRef} {...settings}>
            {slides.map(slide =>
                <div key={slide.id} className="sl-container">
                    <div className="sl-bg">
                        {slide.icon}
                    </div>
                    <div className="sl-text">
                        <h4>{slide.title}</h4>
                        <p>{slide.desc}</p>
                    </div>
                </div>
            )}
        </Slider>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        passRef: (ref) => dispatch(passRefAction(ref))
    }
}

export default connect(null, mapDispatchToProps)(ServicesSlider);