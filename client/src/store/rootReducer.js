import { combineReducers } from 'redux';

import { orderReducer } from '../components/Order/redux/reducer';
import { blogReducer } from '../components/Blog/redux/reducer';
import { sliderReducer } from '../components/Main/Services/redux/reducer';

export const reducers = combineReducers({
    order: orderReducer,
    blog: blogReducer,
    slider: sliderReducer
})