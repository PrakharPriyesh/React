import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import registeredReducer from './registeredReducer';


export default combineReducers({
    auth: authReducer,
    errors: errorReducer,
    registered:  registeredReducer
})