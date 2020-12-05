const initialState = {
    isLoading: true,
    success: {},
    error: {},
    posts: [],
    currentPost: {}
}

export const blogReducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case 'SET_BLOG_LOADER':
            return {
                ...state,
                isLoading: payload
            }
        case 'ERROR':
            return {
                ...state,
                isLoading: false,
                error: payload
            }
        case 'GET_ALL_POSTS':
            return {
                ...state,
                isLoading: false,
                error: {},
                posts: payload
            }
        case 'GET_SINGLE_POST':
            return {
                ...state,
                isLoading: false,
                error: {},
                currentPost: payload
            }
        case 'ADD_NEW_POST':
        case 'EDIT_POST':
        case 'ADMIN_AUTH':
            return {
                ...state,
                isLoading: false,
                success: payload,
                error: {}
            }
        case 'REMOVE_POST':
            return {
                ...state,
                isLoading: false,
                error: {},
                posts: state.posts.filter(post => post._id !== payload)
            }
        default:
            return state
    }
}