import React from 'react';
import { BarLoader } from 'react-spinners';

const Spinner = (props) => {
    const { style, color, loading } = props

    return (
        <BarLoader css={style} color={color} loading={loading} />
    )
}

export default Spinner;
