import { combineReducers } from 'redux';
import wheather from './fetchWheather/reducers';
import users from './users/reducers';

const rootReducer = combineReducers({
  wheather,
  users
});

export default rootReducer;
