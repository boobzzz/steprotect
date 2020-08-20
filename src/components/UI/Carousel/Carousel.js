import React from 'react';

import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import FormCall from '../../../components/Form/Call/FormCall';
import './Carousel.css';

const Carousel = ({ slides }) => {
    return (
        <Slider
            autoplay={3000} 
            duration={2000}>
            {slides.map((slide, i) =>
                <div key={i} style={{ backgroundImage: `url('${slide.bg}')` }}>
                    <h1>{slide.header}</h1>
                    <p>{slide.text}</p>
                    <FormCall slide={slide} />
                </div>
            )}
        </Slider>
    )
}

export default Carousel;
