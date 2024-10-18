import { combineReducers } from 'redux';
import counterReducer from './counterSlice';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage for React Native
import { persistReducer } from 'redux-persist';

// Redux Persist configuration
const persistConfig = {
  key: 'root',
  storage: AsyncStorage, // Use AsyncStorage for React Native
};

// Combine reducers
const rootReducer = combineReducers({
  counter: counterReducer,
});

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
