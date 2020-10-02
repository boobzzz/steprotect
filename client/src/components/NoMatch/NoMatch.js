import React from 'react';

import classes from './NoMatch.module.css';

const NoMatch = (props) => {
    return (
        <div className={classes.NoMatch}>
            <h1>404 - Сторінку не знайдено :(</h1>
        </div>
    )
}

export default NoMatch;
