import React from 'react';
import * as R from 'ramda';
import { HashLink as Link } from 'react-router-hash-link';

import classes from './FooterArticles.module.css';

const imgCount = 6

const FooterArticles = (props) => {
    return (
        <div className={classes.Articles}>
            <h2>Блог - цікаві статті</h2>
            <div>
                {R.range(1, imgCount + 1).map(item =>
                    <Link to="/blog" key={item}>
                        <img src={require(`../../../assets/images/footer-work-1-${item}.png`)} alt=""/>
                    </Link>
                )}
            </div>
        </div>
    )
}

export default FooterArticles;
