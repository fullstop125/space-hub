import { combineReducers, configureStore } from '@reduxjs/toolkit';
import rocketReducer from './Rockets/rocket';

const rootReducer = combineReducers({
  rockets: rocketReducer,
  /* Add mission Reducer here */
});

const store = configureStore({
  reducer: rootReducer,
});
export default store;
