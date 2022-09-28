import { combineReducers, configureStore } from '@reduxjs/toolkit';
import profileReducer from './profile/profile';
import missionsReducer from './Missions/mission';
import rocketReducer from './Rockets/rocket';

const rootReducer = combineReducers({
  rockets: rocketReducer,
  missions: missionsReducer,
  profile: profileReducer,
});

const store = configureStore({
  reducer: rootReducer,
});
export default store;
