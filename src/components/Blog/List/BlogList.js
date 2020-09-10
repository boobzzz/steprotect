import React from 'react';
import { NavLink } from "react-router-dom";

import Button from '../../UI/Button/Button';
import classes from './BlogList.module.css';

import blog_1 from '../../../assets/images/blog-1-1.jpg';
import blog_2 from '../../../assets/images/blog-1-2.jpg';
import blog_3 from '../../../assets/images/blog-1-3.jpg';

const posts = [
    {
        id: '6516516515',
        title: 'Безпека - це знати',
        img: blog_1
    },
    {
        id: '2428282282',
        title: 'Blog title 2',
        img: blog_2
    },
    {
        id: '7531596582',
        title: 'Blog title 3',
        img: blog_3
    },
    {
        id: '3129037252',
        title: 'Blog title 4',
        img: blog_2
    },
    {
        id: '9995520361',
        title: 'Blog title 5',
        img: blog_3
    },
    {
        id: '5555421033',
        title: 'Blog title 6',
        img: blog_1
    }
]

const BlogList = (props) => {
    return (
        <main className={classes.BlogList}>
            <section className={classes.Header}>
                <h2>Блог</h2>
                <div>
                    <NavLink to="/">Головна</NavLink>
                    <span>/</span>
                    <NavLink to="/blog">Блог</NavLink>
                </div>
            </section>
            <section className={`wrapper ${classes.List}`}>
                {posts.map(item =>
                    <div key={item.id} className={classes.Post}>
                        <NavLink to={`/blog/post/${item.id}`}>
                            <img src={item.img} alt=""/>
                        </NavLink>
                        <div>
                            <h3>{item.title}</h3>
                            <Button
                                path={`/blog/post/${item.id}`}
                                label="Детально" />
                        </div>
                    </div>
                )}
            </section>
        </main>
    )
}

export default BlogList;
