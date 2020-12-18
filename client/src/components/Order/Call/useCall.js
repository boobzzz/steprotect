import { useState, useEffect } from 'react';

export const useCall = (isLoading, setLoader, sendOrder, resetMessage) => {
    const [ showCallForm, setShowCallForm ] = useState(false)
    const [ showMessage, setShowMessage ] = useState(false)
    
    useEffect(() => {
        window.addEventListener('click', () => {
            setShowCallForm(false)
        })
    }, [])
    
    const toggleCallOrderBtn = (e) => {
        e.stopPropagation()

        setShowCallForm(true)
        setShowMessage(false)
    }
    
    const handleSubmit = (values, { resetForm }) => {
        let options = {
            method: 'POST',
            body: values
        }
    
        setLoader(true)
        sendOrder('/send/call', options)
        resetForm({ values: '' })
    
        if (!isLoading) setShowMessage(true)
        
        setTimeout(() => {
            setShowMessage(false)
            resetMessage()
        }, 5000)
    }

    return { showCallForm, showMessage, toggleCallOrderBtn, handleSubmit }
}
