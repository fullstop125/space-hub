import { combineReducers, configureStore, applyMiddleware } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import profileReducer from './profile/profile';
import missionsReducer from './Missions/mission';
import rocketReducer from './Rockets/rocket';

const persistConfig = {
  key: 'main-root',
  storage,
};

const rootReducer = combineReducers({
  rockets: rocketReducer,
  missions: missionsReducer,
  profile: profileReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
}, applyMiddleware);

const persistor = persistStore(store);
export { persistor };
export default store;
