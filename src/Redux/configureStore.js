import { combineReducers, configureStore } from '@reduxjs/toolkit';
import rocketsReducer from './Rockets/rocket';

const rootReducer = combineReducers({
  rockets: rocketsReducer,
  /* Add mission Reducer here */
});

const store = configureStore(rootReducer);
export default store;
