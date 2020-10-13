import { combineReducers, applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';

import counterReducer from './CounterReducer'

const AppReducers = combineReducers({
    counterReducer,
});

const rootReducer = (state, action) => {
	return AppReducers(state,action);
}


let store = createStore(rootReducer, compose(applyMiddleware(thunk)));

export default store;