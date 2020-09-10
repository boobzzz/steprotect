import { combineReducers } from 'redux';

import orderReducer from '../components/Form/redux/reducer';
import blogReducer from '../components/Blog/redux/reducer';

const reducers = combineReducers({
    order: orderReducer,
    blog: blogReducer
})

export default reducers;
