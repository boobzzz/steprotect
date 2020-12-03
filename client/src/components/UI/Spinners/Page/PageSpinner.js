import React from 'react';
import { SquareLoader } from 'react-spinners';

export const PageSpinner = (props) => {
    const { size, color, loading } = props

    return <SquareLoader size={size} color={color} loading={loading} />
}