import {combineReducers} from 'redux';
import postReducer from './postReducer';
import usersReducer from './usersReducer';
export default combineReducers({
    users: usersReducer,
    posts:postReducer
});