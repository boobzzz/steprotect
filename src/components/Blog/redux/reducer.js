const initialState = {
    posts: [],
    currentPost: {},
    isLoading: false,
    status: '',
}

const blogReducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case 'SET_LOADER':
            return {
                ...state,
                isLoading: payload
            }
        case 'RESET_STATUS':
            return {
                ...state,
                status: ''
            }
        case 'GET_POSTS':
            return {
                ...state,
                posts: payload,
                isLoading: false
            }
        case 'GET_POST':
            return {
                ...state,
                currentPost: payload,
                isLoading: false
            }
        case 'ADD_POST':
            return {
                ...state,
                posts: [...state.posts, payload],
                isLoading: false,
                status: payload.status
            }
        case 'EDIT_POST':
            return {
                ...state,
                isLoading: false,
                status: payload.status
            }
        case 'REMOVE_POST':
            return {
                ...state,
                posts: state.posts.filter(post => post._id !== payload),
                isLoading: false
            }
        default:
            return state
    }
}

export default blogReducer;
