import React from 'react';

import SectionHeader from '../../UI/SectionHeader/SectionHeader';

import classes from './Process.module.css';

const stages = [
    {
        phase: '01',
        title: 'Проведення обстеження',
        desc: `Наш фахівець проводить обстеження об'єкту та формує кошторисну
               пропозицію. Дана послуга є безкоштовною.`
    },
    {
        phase: '02',
        title: 'Узгодження',
        desc: `На етапі узгодження проекту ми обговорюємо усі можливі нюанси та
               терміни виконання. На цьому етапі ви оплачуєте лише вартість обладнання.`
    },
    {
        phase: '03',
        title: 'Монтаж, тестування, запуск та інструктаж',
        desc: `Виконуємо монтаж, налаштовуємо систему, тестуємо та проводимо
               інструктаж для користувачів. По завершенню усіх етапів, ви
               оплачуєте вартість виконаних робіт.`
    }
]

const Process = (props) => {
    return (
        <section id="process" className={classes.Process}>
            <div className="wrapper">
                <SectionHeader
                    section="Як ми працюємо"
                    title="Замовлення послуги"
                    titleColor="#222" />
                <p>
                    Телефонуйте за номером
                    <a href="tel:+380676731457"> +38 (067) 673 14 57 </a>
                    або сформуйте замовлення через наш сайт
                </p>
                <div className={classes.Phase}>
                    {stages.map(stage =>
                        <div key={stage.phase}>
                            <div>{stage.phase}</div>
                            <h4>{stage.title}</h4>
                            <p>{stage.desc}</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default Process;
