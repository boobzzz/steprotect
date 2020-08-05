import React from 'react';
import Slider from 'react-animated-slider';

import 'react-animated-slider/build/horizontal.css';
import './Carousel.css';

const Carousel = ({ slides }) => {
    return (
        <Slider autoplay={3000}>
            {slides.map((slide, i) =>
                <div key={i} style={{ backgroundImage: `url('${slide.bg}')` }}>
                    <h1>{slide.header}</h1>
                    <p>{slide.text}</p>
                </div>
            )}
        </Slider>
    )
}

export default Carousel;
