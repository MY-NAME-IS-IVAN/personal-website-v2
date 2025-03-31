import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './themeSlice';
import sectionReducer from './sectionSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    section: sectionReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;