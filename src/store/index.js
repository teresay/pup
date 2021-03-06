import {createStore, combineReducers, applyMiddleware} from 'redux'
// import { reduxReactRouter, routerStateReducer, ReduxRouter } from 'redux-router';
// import { createHistory } from 'history';
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import dog from './dog'
import user from './user'


const reducer = combineReducers({dog, user})
const middleware = composeWithDevTools(applyMiddleware(thunkMiddleware, createLogger({collapsed: true})))
const store = createStore(reducer, middleware)

export default store
export * from './user'
export * from './dog'
