import { combineReducers } from 'redux';
import jobAppsReducer from './jobAppsReducer';

export default combineReducers({
  jobApps: jobAppsReducer,
});
