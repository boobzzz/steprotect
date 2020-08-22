import React from 'react';

import classes from './SectionHeader.module.css';

const SectionHeader = (props) => {
    const { section, title, titleColor } = props

    return (
        <div className={classes.Header}>
            <span>{section}</span>
            <h2 style={{ color: `${titleColor}` }}>
                {title}
            </h2>
        </div>
    )
}

export default SectionHeader;
