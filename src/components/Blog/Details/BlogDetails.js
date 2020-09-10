import React from 'react';
import { NavLink } from "react-router-dom";

import SectionHeader from '../../UI/SectionHeader/SectionHeader';
import classes from './BlogDetails.module.css';

const BlogDetails = (props) => {
    return (
        <div className={classes.BlogDetails}>
            <div className={classes.Header}>
                <h2>Детально</h2>
                <div>
                    <NavLink to="/">Головна</NavLink>
                    <span>/</span>
                    <NavLink to="/blog">Блог</NavLink>
                    <span>/</span>
                    <NavLink to="/blog/post/:id">Детально</NavLink>
                </div>
            </div>
            <article className={`wrapper ${classes.Post}`}>
                <SectionHeader
                    section="Пост"
                    title="Безпека - це знати"
                    titleColor="#222" />
                <div >
                    <p>Ми не можемо бути в усіх потрібних локаціях одночасно. Але
                       ми можемо бачити що відбувається в режимі реального часу з
                       телефону. І це чудово!</p>
                    <p>Адже всього два кліки і можна перевірити:</p>
                    <p>Чи в безпеці діти, які бавляться на подвір’ї, поки батьки готують їжу.</p>
                    <p>Чи добре справляється зі своїми обов’язками няня вашої дитини.</p>
                    <p>Чи все гаразд з найріднішими, які в поважному віці і живуть далеко.</p>
                    <p>Чи вчасно розпочали роботу працівники вашого бізнесу.</p>
                    <p>Чи немає сторонніх людей на території важливих для вас будівель.</p>
                    <p>Сучасні технології дозволяють перевірити безпеку усього, що
                       для вас важливо безпосередньо зі смартфону чи планшета.</p>
                    <p>Телефонуйте зараз +38 (067)673-14-57, та переконайтесь, що безпека – це знати.</p>
                </div>
            </article>
        </div>
    )
}

export default BlogDetails;
