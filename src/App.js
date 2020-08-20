import React from 'react';

import Header from './components/Header/Header';
import Carousel from './components/UI/Carousel/Carousel';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import ScrollUp from './components/UI/ScrollUp/ScrollUp';

import slide1 from './assets/images/slider-1-1.jpg';
import slide2 from './assets/images/slider-1-2.jpg';
import slide3 from './assets/images/slider-1-3.jpg';

const slides = [
    {
        bg: slide1,
        header: 'Зробіть ваше оточення на 100% Безпечним',
        text: 'Ваша безпека та безпека ваших близьких залежать лише від вас',
        btn: 'замовити дзвінок'
    },
    {
        bg: slide2,
        header: 'Контролюйте безпеку території зі свого смартфону в режимі реального часу',
        text: 'Технічна підтримка. Приймаємо замовлення 24/7',
        btn: 'замовити дзвінок'
    },
    {
        bg: slide3,
        header: 'Яку систему відеоспостереження обрати?',
        text: `Ми підберемо для вас найефективніший варіант.
               Консультація безкоштовно +38 (097) 769 97 99`,
        btn: 'замовити дзвінок'
    },
]

function App() {
    return (
        <>
            <Header />
            <section>
                <Carousel slides={slides} />
            </section>
            <Main />
            <Footer />
            <ScrollUp />
        </>
    )
}

export default App;
