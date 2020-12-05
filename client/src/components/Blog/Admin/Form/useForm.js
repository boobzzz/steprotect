import { useState, useEffect } from 'react';

export const useForm = (id, isLoading, readPost, setLoader, createPost, updatePost) => {
    const [ showMessage, setShowMessage ] = useState(false)

    useEffect(() => {
        setLoader(false)
        id && readPost(`/blog/posts/${id}`)
    }, [setLoader, readPost, id])

    const handleSubmit = (values, { resetForm }) => {
        let options = {
            method: !id ? 'POST' : 'PUT',
            body: values
        }

        setLoader(true)
        
        !id
        ? createPost('/blog/posts', options)
        : updatePost(`/blog/posts/${id}`, options)
        
        if (!id) resetForm()

        if (!isLoading) setShowMessage(true)
        setTimeout(() => {
            setShowMessage(false)
        }, 5000)
    }

    return { showMessage, handleSubmit }
}