import { combineReducers } from 'redux';
import HomeReducer from './HomeReducer';
import DeviceReducer from './DeviceReducer';

//NOTE: Reducers produce all the apps state which will be used for (re)rendering

export default combineReducers({
  home: HomeReducer,
  deviceAction: DeviceReducer
});
