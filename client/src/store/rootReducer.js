import { combineReducers } from 'redux';

import orderReducer from '../components/Form/redux/reducer';
import blogReducer from '../components/Blog/redux/reducer';
import sliderReducer from '../components/Main/Services/redux/reducer';

const reducers = combineReducers({
    order: orderReducer,
    blog: blogReducer,
    slider: sliderReducer
})

export default reducers;
