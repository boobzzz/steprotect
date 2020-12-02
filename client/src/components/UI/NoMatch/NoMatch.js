import React from 'react';

import classes from './NoMatch.module.css';

const initialError = {
    status: 404,
    message: 'Ресурс не знайдено, але він може бути доступний в майбутньому'
}

export const NoMatch = ({ error = initialError }) => {
    const { status, message } = error

    return (
        <div className={classes.Container}>
            <div className={classes.NoMatch}>
                <h1>{status}:</h1>
                <h3>{message}</h3>
            </div>
        </div>
    )
}