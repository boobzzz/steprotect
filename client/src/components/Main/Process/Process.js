import React from 'react';

import { SectionHeader } from '../../UI/SectionHeader/SectionHeader';
import { stages } from './stages';
import classes from './Process.module.css';

export const Process = () => {
    return (
        <section id="process" className={classes.Process}>
            <div className="wrapper">
                <SectionHeader
                    section="Як ми працюємо"
                    title="Замовлення послуги"
                    titleColor="#222" />
                <p>
                    Телефонуйте за номером
                    <a href="tel:+380684738061"> +38 (068) 473 80 61 </a>
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