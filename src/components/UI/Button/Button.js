import React from 'react';
import { NavLink } from "react-router-dom";

import classes from './Button.module.css';

const Button = ({ path, label }) => {
    return (
        <NavLink to={path} className={classes.Button}>
            {label}
        </NavLink>
    )
}

export default Button;
