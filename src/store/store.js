import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './rootReducer';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const middleware = composeEnhancer(
    applyMiddleware(thunk)
)

const store = createStore(reducers, middleware);

export default store;
