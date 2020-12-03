import React from 'react';
import ScrollUpButton from "react-scroll-up-button";

export const ScrollUpBtn = (props) => {
    const btnStyles = {
        background: '#FF0000',
        outline: 'none'
    }

    return <ScrollUpButton style={btnStyles} className="scrlupbtn" />
}