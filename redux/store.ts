import { configureStore } from '@reduxjs/toolkit';
import persistedReducer from './rootReducer';
import persistStore from 'redux-persist/es/persistStore';

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'], // Ignore actions from persist
        ignoredActionPaths: ['payload', 'meta.arg'],
        ignoredPaths: ['register'], // Ignore the `register` path
      },
    }),
});

export const persistor = persistStore(store);
// Infer the RootState,  AppDispatch, and AppStore types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
