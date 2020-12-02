import * as RA from '../../../store/rootActions';

export const resetStatus = () => ({ type: 'RESET_BLOG_STATUS' })

export const setLoader = (loading) => ({
    type: 'SET_BLOG_LOADER',
    payload: loading
})

export const getPosts = (url, options) => {
    return RA.fetchAction(url, options, 'GET_ALL_POSTS')
}

export const createPost = (url, options) => {
    return RA.fetchAction(url, options, 'ADD_NEW_POST')
}

export const readPost = (url, options) => {
    return RA.fetchAction(url, options, 'GET_SINGLE_POST')
}

export const updatePost = (url, options) => {
    return RA.fetchAction(url, options, 'EDIT_POST')
}

export const deletePost = (url, options) => {
    return RA.fetchAction(url, options, 'REMOVE_POST')
}
