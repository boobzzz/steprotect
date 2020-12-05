import { useState, useEffect } from 'react';
import { isEmpty } from 'ramda';

export const useForm = (isLoading, error, setLoader, sendForm) => {
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

        if (!isLoading && !isEmpty(error)) setShowMessage(true)
        setTimeout(() => {
            setShowMessage(false)
        }, 5000)
    }

    return { showMessage, handleSubmit }
}