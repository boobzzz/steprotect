import React from 'react';

import { MainSlider } from './Slider/MainSlider';
import { Process } from './Process/Process';
import { Services } from './Services/Services';
import { About } from './About/About';

export const Main = () => {
    return (
        <main id="top">
            <MainSlider />
            <Process />
            <Services />
            <About />
        </main>
    )
}