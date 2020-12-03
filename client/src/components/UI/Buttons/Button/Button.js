import React from 'react';
import { NavLink } from "react-router-dom";

import classes from './Button.module.css';

export const Button = ({ path, label, clicked }) => {
    return (
        <NavLink
            to={path}
            className={classes.Button}
            onClick={clicked}>
            {label}
        </NavLink>
    )
}