import { combineReducers, configureStore } from '@reduxjs/toolkit';
import missionsReducer from './Missions/mission';
import rocketReducer from './Rockets/rocket';

const rootReducer = combineReducers({
  rockets: rocketReducer,
  missions: missionsReducer,
});

const store = configureStore({
  reducer: rootReducer,
});
export default store;
