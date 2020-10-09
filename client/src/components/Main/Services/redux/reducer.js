const initialState = {
    slider: {}
}

const sliderReducer = (state = initialState, action) => {
    const { type, payload } = action
    if (type === 'PASS_SLIDER') {
        return {
            ...state,
            slider: payload
        }
    }

    return state
}

export default sliderReducer;
