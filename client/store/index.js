import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import userReducer from './reducers/userReducers';

const reducer = combineReducers ({
  userReducer
})

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
