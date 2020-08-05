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
        text: 'Ваша безпека та безпека ваших близьких залежать лише від вас'
    },
    {
        bg: slide2,
        header: 'Отримайте 100% Контролю над усім, що відбувається довкола',
        text: 'В будь-який момент часу будьте в курсі що відбувається довкола вас'
    },
    {
        bg: slide3,
        header: 'Зробіть ваше оточення Безпечним',
        text: 'Ваша безпека та безпека вашої родини залежать лише від вас'
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
