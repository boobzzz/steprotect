import React from 'react';

import MainSlider from './Slider/MainSlider';
import Process from './Process/Process';
import Services from './Services/Services';
import About from './About/About';

const Main = (props) => {
    return (
        <main id="top">
            <MainSlider />
            <Process />
            <Services />
            <About />
        </main>
    )
}

export default Main;
