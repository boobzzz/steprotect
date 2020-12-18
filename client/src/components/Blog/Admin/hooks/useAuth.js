import { useEffect, useCallback } from 'react';

const storageName = 'adminData'

export const useAuth = (success, setIsLoggedIn, resetSuccess) => {
    const login = useCallback(() => {
        const { id, token } = success

        localStorage.setItem(storageName, JSON.stringify({ id, token }))
        setIsLoggedIn(true)
        resetSuccess()
    }, [success, setIsLoggedIn, resetSuccess])

    const logout = useCallback(() => {
        localStorage.removeItem(storageName)
        setIsLoggedIn(false)
    }, [setIsLoggedIn])

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem(storageName))
        
        if (data && data.token) login()
    }, [login])

    return { login, logout }
}