import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import initialState from './initialState'
import list from './list'
import edite from './edite'

const rootReducer = combineReducers({
    list,
    edite
})

export default function configureStore() {
    const store = createStore(rootReducer, initialState, applyMiddleware(thunk, promise));
    return store;
}