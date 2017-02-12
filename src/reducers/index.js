import { combineReducers } from 'redux';
import HomeReducer from './HomeReducer';

//NOTE: Reducers produce all the apps state which will be used for (re)rendering

export default combineReducers({
  home: HomeReducer,
  selectedDevice: []
});
