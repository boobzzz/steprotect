import React, { useState } from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

import FormCall from '../../../components/Form/Call/FormCall';

import './MainSlider.css';

import slide1 from '../../../assets/images/slider-1-1.jpg';
import slide2 from '../../../assets/images/slider-1-2.jpg';
import slide3 from '../../../assets/images/slider-1-3.jpg';

const slides = [
    {
        id: 'ms-1',
        bg: slide1,
        title: 'Зробіть ваше оточення на 100% Безпечним',
        desc: 'Ваша безпека та безпека ваших близьких залежать лише від вас',
        btn: 'замовити дзвінок'
    },
    {
        id: 'ms-2',
        bg: slide2,
        title: 'Контролюйте безпеку території зі свого смартфону в режимі реального часу',
        desc: 'Технічна підтримка. Приймаємо замовлення 24/7',
        btn: 'замовити дзвінок'
    },
    {
        id: 'ms-3',
        bg: slide3,
        title: 'Яку систему відеоспостереження обрати?',
        desc: `Ми підберемо для вас найефективніший варіант.
               Консультація безкоштовно +38 (097) 769 97 99`,
        btn: 'замовити дзвінок'
    },
]

const MainSlider = (props) => {
    return (
        <section className='main-slider'>
            <Slider
                // autoplay={3000}
                duration={5000}>
                {slides.map(slide =>
                    <div key={slide.id} style={{ backgroundImage: `url('${slide.bg}')` }}>
                        <h1>{slide.title}</h1>
                        <p>{slide.desc}</p>
                        <FormCall slide={slide} />
                    </div>
                )}
            </Slider>


        </section>
    )
}

export default MainSlider;
