import React from 'react';
import Slider from "react-slick";
import { GiCctvCamera, GiSpy } from 'react-icons/gi';
import { RiAlarmWarningLine } from 'react-icons/ri';
import { IoMdFingerPrint } from 'react-icons/io';
import { FaNetworkWired, FaSignal } from 'react-icons/fa';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './ServicesSlider.css';

const slides = [
    {
        id: 'ss-1',
        icon: <GiCctvCamera />,
        title: 'Відеоспостереження',
        desc: `Знімайте та збергайте зображення у форматах Full HD/4K.
               Записуйте та відтворюйте події з відеореєстратора чи камери.
               Отримуйте сповіщення у випадку руху в зоні дії відео камери.
               Встановлюємо провідні та безпровідні системи.`
    },
    {
        id: 'ss-2',
        icon: <GiSpy />,
        title: 'Виявлення систем стеження',
        desc: `Виявлення прихованих засобів зняття інформації. Пошук "жучків",
               радіо моніторинг, аналіз дротових комунікацій, оптичне зондування, 
               локація нелінійності, фізичний пошук.`
    },
    {
        id: 'ss-3',
        icon: <RiAlarmWarningLine />,
        title: 'Охоронна сигналізація',
        desc: `Є чудовим стримуючим фактором. Покажіть, що ви серйозно ставитеся
               до безпеки. Ми працюємо з найсучаснішим та найякіснішим обладнанням.
               Встановлюємо дротові та бездротові системи.`
    },
    {
        id: 'ss-4',
        icon: <IoMdFingerPrint />,
        title: 'Системи доступу',
        desc: `Контролюйте та керуйте входом та виходом людей з будівлі, в’їздом
               та виїздом транспорту з території. Чому варто встановити?
               Облік робочого часу, обмеження доступу, контроль пересування.`
    },
    {
        id: 'ss-5',
        title: 'Комп\'ютерні мережі',
        icon: <FaNetworkWired />,
        desc: `Пропонуємо прокладання комп’ютерних мереж та розширення вже
               існуючих мереж. Організовуємо такі види мереж: дротові,
               бездротові та гібридні комп’ютерні мережі.`
    },
    {
        id: 'ss-6',
        icon: <FaSignal />,
        title: 'GSM зв\'язок',
        desc: `Підсилення зв'язку за допомогою антен чи репітерів. Таке
               обладнання застосовується для забезпечення надійного та
               стабільного сигналу як для телефонії, так і для бездротового
               інтернету при використанні 3G/4G LTE мереж.`
    }
]

const settings = {
    arrows: false,
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    className: 'Slider',
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 699,
            settings: {
                slidesToShow: 1
            }
        },
    ]
}

const ServicesSlider = (props) => {
    return (
        <Slider {...settings}>
            {slides.map(slide =>
                <div key={slide.id} className="outer">
                    <div className="inner">
                        <div className="front">
                            <i>{slide.icon}</i>
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