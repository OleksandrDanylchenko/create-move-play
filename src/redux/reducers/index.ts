import { combineReducers } from 'redux';
import { user } from './user';
import { exercises } from './exercises';

export default combineReducers({ user, exercises });
