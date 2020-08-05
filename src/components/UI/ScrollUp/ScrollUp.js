import React from 'react';
import ScrollUpButton from "react-scroll-up-button";

const ScrollUp = (props) => {
    const btnStyles = {
        background: '#57b957',
        outline: 'none'
    }

    return (
        <ScrollUpButton style={btnStyles} className="scrlupbtn" />
    )
}

export default ScrollUp;
