import React from 'react';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './ServicesSlider.css';

import slide1 from '../../../../assets/images/services-1-1.jpg';
import slide2 from '../../../../assets/images/services-1-2.jpg';
import slide3 from '../../../../assets/images/services-1-3.jpg';
import slide4 from '../../../../assets/images/services-1-4.jpg';
import slide5 from '../../../../assets/images/services-1-5.jpg';

const slides = [
    {
        id: 'ss-1',
        img: slide1,
        title: 'Відеоспостереження',
        desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.`
    },
    {
        id: 'ss-2',
        img: slide2,
        title: 'Охоронна сигналізація',
        desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.`
    },
    {
        id: 'ss-3',
        img: slide3,
        title: 'Системи доступу',
        desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.`
    },
    {
        id: 'ss-4',
        title: 'Інтернет',
        img: slide4,
        desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.`
    },
    {
        id: 'ss-5',
        img: slide5,
        title: 'GSM зв\'язок',
        desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.`
    }
]

const settings = {
    arrows: false,
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    className: 'Slider',
}

const ServicesSlider = (props) => {
    return (
        <Slider {...settings}>
            {slides.map(slide =>
                <div key={slide.id} className="outer">
                    <div className="inner">
                        <div className="front">
                            <img src={slide.img} alt=""/>
                        </div>
                        <div className="back">
                            <h4>{slide.title}</h4>
                            <p>{slide.desc}</p>
                        </div>
                    </div>
                </div>
            )}
        </Slider>
    )
}

export default ServicesSlider;
