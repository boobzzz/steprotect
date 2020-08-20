import React from 'react';

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
            <div className={classes.Wrapper}>
                <div className={classes.Header}>
                    <span>Як ми працюємо</span>
                    <h2>Замовлення послуги</h2>
                    <p>Телефонуйте за номером
                    <a href="/#"> +38 (097) 769 97 99 </a>
                    або сформуйте замовлення через наш сайт</p>
                </div>
                <div className={classes.Phase}>
                    {stages.map(stage =>
                        <div key={stage.phase}>
                            <div>{stage.phase}</div>
                            <h3>{stage.title}</h3>
                            <p>{stage.desc}</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default Process;
