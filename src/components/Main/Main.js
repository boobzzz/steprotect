import React from 'react';

import classes from './Main.module.css';

const stages = [
    {
        phase: '01',
        title: 'Замовлення Послуги',
        desc: 'Ви складаєте замовлення на сайті, або ж телефонуєте за номером 80 67 320 0348.'
    },
    {
        phase: '02',
        title: 'Проведення Замірів',
        desc: 'Наш фахівець проводить огляд об\'єкту та робить відповідні заміри. Дана послуга є безкоштовною.'
    },
    {
        phase: '03',
        title: 'Проектування та Розрахунок',
        desc: 'Складаємо кошторис та розраховуємо вартість.'
    },
    {
        phase: '04',
        title: 'Узгодження Проекту',
        desc: 'Узгоджуємо проект, проводимо остаточний розрахунок після внесення можливих змін до проекту.'
    },
    {
        phase: '05',
        title: 'Монтаж',
        desc: 'Проводимо монтаж системи в зручний для Вас час.'
    },
    {
        phase: '06',
        title: 'Тестування, Запуск та Інструктаж',
        desc: 'Налаштовуємо систему, тестуємо та проводимо інструктаж персоналу.'
    }
]

const Main = (props) => {
    return (
        <main>
            <div className={classes.Wrapper}>
                <section>

                </section>
                <section>
                    <span>Процес</span>
                    <h2>Як Ми Працюємо</h2>
                    <div className={classes.Phase}>
                        {stages.map(stage =>
                            <div key={stage.phase}>
                                <div>{stage.phase}</div>
                                <h3>{stage.title}</h3>
                                <p>{stage.desc}</p>
                            </div>
                        )}
                    </div>
                </section>
            </div>
        </main>
    )
}

export default Main;
