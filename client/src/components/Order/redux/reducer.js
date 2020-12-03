const initialState = {
    isLoading: false,
    message: ''
}

export const orderReducer = (state = initialState, action) => {
    const { type, payload } = action

    switch (type) {
        case 'RESET_FORM_MESSAGE':
            return {
                ...state,
                message: ''
            }
        case 'SET_FORM_LOADER':
            return {
                ...state,
                isLoading: payload
            }
        case 'SEND_FORM':
            return {
                ...state,
                isLoading: false,
                message: payload.message
            }
        default:
            return state
    }
}