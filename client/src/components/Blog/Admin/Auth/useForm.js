import { useState, useEffect } from 'react';

export const useForm = (isLoading, setLoader, sendForm) => {
    const [ showMessage, setShowMessage ] = useState(false)

    useEffect(() => {
        setLoader(false)
    }, [setLoader])
    
    const handleSubmit = (values) => {
        let options = {
            method: 'POST',
            body: values
        }
        
        setLoader(true)
        sendForm('/admin/login', options)

        if (!isLoading) setShowMessage(true)

        setTimeout(() => {
            setShowMessage(false)
        }, 5000)
    }

    return { showMessage, handleSubmit }
}