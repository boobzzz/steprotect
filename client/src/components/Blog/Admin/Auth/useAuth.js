import { useState, useEffect } from 'react';
import { isEmpty } from 'ramda';

const storageName = 'adminData'

export const useAuth = (success) => {
    const { id, token } = success
    const [ isLoggedIn, setIsLoggedIn ] = useState(false)

    useEffect(() => {
        if (!isEmpty(success)) localStorage.setItem(storageName, JSON.stringify({ id, token }))

        const data = JSON.parse(localStorage.getItem(storageName))

        if (data && data.token) setIsLoggedIn(true)
    }, [success, id, token])

    return { isLoggedIn }
}