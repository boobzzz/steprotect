import { fetchApi } from '../../../store/middlewares';

export const setLoaderAction = (loading) => ({
    type: 'SET_FORM_LOADER',
    payload: loading
})

export const sendOrderAction = (url, options) => {
    return fetchApi(url, options, 'SEND_FORM')
}

export const resetMessageAction = () => ({ type: 'RESET_FORM_MESSAGE' })