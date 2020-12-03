import { useState, useEffect } from 'react';

export const useHeader = () => {
    const [ scrolled, setScrolled ] = useState(false)
    const [ open, setOpen ] = useState(false)
    const [ modal, setModal ] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            const isTop = window.scrollY > 1
            isTop ? setScrolled(true) : setScrolled(false)
        })
    }, [])

    const toggleMenu = () => setOpen(!open)

    const toggleModal = () => {
        setModal(!modal)
        setOpen(false)
    }

    return { scrolled, open, modal, toggleMenu, toggleModal }
}