import {configureStore} from '@reduxjs/toolkit';
import FavoriteReducer from './slices/favoriteSlice';

export const store = configureStore({
  reducer: {
    favorite: FavoriteReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;

