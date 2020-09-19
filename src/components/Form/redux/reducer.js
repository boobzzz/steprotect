const initialState = {
    status: '',
    isLoading: false
}

const orderReducer = (state = initialState, action) => {
    const { type, payload } = action

    switch (type) {
        case 'RESET_STATUS':
            return {
                ...state,
                status: ''
            }
        case 'SET_LOADER':
            return {
                ...state,
                isLoading: payload
            }
        case 'SEND_FORM':
            return {
                ...state,
                status: payload.status,
                isLoading: false
            }
        default:
            return state

    }
}

export default orderReducer;
