import { useState } from 'react';

export const useForm = (isLoading, setLoader, sendOrder, resetMessage) => {
    const [ showMessage, setShowMessage ] = useState(false)

    const handleSubmit = (values, {resetForm}) => {
        let options = {
            method: 'POST',
            body: values
        }

        setLoader(true)
        sendOrder('/send/order', options)
        resetForm({ values: '' })

        if (!isLoading) setShowMessage(true)
        setTimeout(() => {
            setShowMessage(false)
            resetMessage()
        }, 5000)
    }

    return { showMessage, handleSubmit }
}