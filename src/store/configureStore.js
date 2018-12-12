import {
    createStore,
    combineReducers,
    compose,
    applyMiddleware,
} from 'redux';

import ReduxThunk from 'redux-thunk'

import { appReducer } from './appReducer';

const composeEnhancers = process.env.NODE_ENV !== 'production' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

// add redux-thunk as a middleware
const createStoreWithMiddleware = composeEnhancers(applyMiddleware(ReduxThunk))(createStore);

const rootReducer = combineReducers({
    app: appReducer,
});

export default function configureStore(initialState = {}) {
    return createStoreWithMiddleware(rootReducer, initialState);
};
