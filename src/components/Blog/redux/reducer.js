const initialState = {
    posts: null
}

const blogReducer = (state = initialState, action) => {
    const { type, payload } = action

    switch (type) {
        case 'expression':
            return {
                ...state,
                posts: payload
            }
        default:
            return state
    }
}

export default blogReducer;
