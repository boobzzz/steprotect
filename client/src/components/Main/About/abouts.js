import React from 'react';
import { GiWeightLiftingUp } from 'react-icons/gi';
import { RiUserFollowLine, RiFullscreenExitLine } from 'react-icons/ri';
import { MdHighQuality } from 'react-icons/md';

export const abouts = [
    {
        id: 1,
        icon: <RiUserFollowLine />,
        title: 'Відповідальність',
        desc: `Відповідальність у Steprotect є першочерговою. Ми приїдемо в
               чітко зазначений час, зробимо свою роботу професійно та чисто.`
    },
    {
        id: 2,
        icon: <MdHighQuality />,
        title: 'Якість',
        desc: `Ми прагнемо надавати послуги на європейському рівні, керуючись
               взаємоповагою та орієнтуючись на тривалу співпрацю.`
    },
    {
        id: 3,
        icon: <RiFullscreenExitLine />,
        title: 'Гнучкість',
        desc: `Нам цікаво робити безпечними площі різного масштабу. Маємо якісний
               досвід роботи з квартирами та будинками, торговими майданчиками
               та бізнес центрами, виробництвами та житловими комплексами.`
    },
    {
        id: 4,
        icon: <GiWeightLiftingUp />,
        title: 'Розвиток',
        desc: `Ми любимо складні задачі, бо саме вони є запорукою невпинного розвитку.`
    }
]
