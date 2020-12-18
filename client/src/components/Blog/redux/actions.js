import { fetchApi } from '../../../store/middlewares';

export const setLoaderAction = (loading) => ({
    type: 'SET_BLOG_LOADER',
    payload: loading
})

export const getPostsAction = (url, options) => {
    return fetchApi(url, options, 'GET_ALL_POSTS')
}

export const createPostAction = (url, options) => {
    return fetchApi(url, options, 'ADD_NEW_POST')
}

export const readPostAction = (url, options) => {
    return fetchApi(url, options, 'GET_SINGLE_POST')
}

export const updatePostAction = (url, options) => {
    return fetchApi(url, options, 'EDIT_POST')
}

export const deletePostAction = (url, options) => {
    return fetchApi(url, options, 'REMOVE_POST')
}

export const adminAuthAction = (url, options) => {
    return fetchApi(url, options, 'ADMIN_AUTH')
}

export const setIsLoggedIn = (value) => ({
    type: 'SET_LOGGED_IN',
    payload: value
})

export const resetSuccessAction = () => ({ type: 'RESET_SUCCESS' })