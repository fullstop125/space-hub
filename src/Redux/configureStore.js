import { combineReducers, configureStore } from '@reduxjs/toolkit';
import profileReducer from './profile/profile';
import rocketReducer from './Rockets/rocket';

const rootReducer = combineReducers({
  rockets: rocketReducer,
  profile: profileReducer,
});

const store = configureStore({
  reducer: rootReducer,
});
export default store;
