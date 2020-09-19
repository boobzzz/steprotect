import * as RA from '../../../store/rootActions';

export const resetStatus = () => ({ type: 'RESET_STATUS' })

export const setLoader = (loading) => ({
    type: 'SET_LOADER',
    payload: loading
})

export const getPosts = (url, options) => {
    return RA.fetchAction(url, options, 'GET_POSTS')
}

export const createPost = (url, options) => {
    return RA.fetchAction(url, options, 'ADD_POST')
}

export const readPost = (url, options) => {
    return RA.fetchAction(url, options, 'GET_POST')
}

export const updatePost = (url, options) => {
    return RA.fetchAction(url, options, 'EDIT_POST')
}

export const deletePost = (url, options) => {
    return RA.fetchAction(url, options, 'REMOVE_POST')
}
