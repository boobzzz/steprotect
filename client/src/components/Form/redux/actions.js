import * as RA from '../../../store/rootActions';

export const sendOrder = (url, options) => {
    return RA.fetchAction(url, options, 'SEND_FORM')
}

export const setLoader = (loading) => ({
    type: 'SET_FORM_LOADER',
    payload: loading
})

export const resetStatus = () => ({ type: 'RESET_FORM_STATUS' })
