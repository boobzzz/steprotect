import React from 'react';
import { BarLoader } from 'react-spinners';

export const ButtonSpinner = (props) => {
    const { style, color, loading } = props

    return <BarLoader css={style} color={color} loading={loading} />
}