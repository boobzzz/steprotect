import React from 'react';
import { NavLink } from "react-router-dom";

import classes from './DetailsBtn.module.css';

const DetailsBtn = ({ path, label }) => {
    return (
        <NavLink to={path} className={classes.Button}>
            {label}
        </NavLink>
    )
}

export default DetailsBtn;
