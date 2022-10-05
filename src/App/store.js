import { configureStore } from '@reduxjs/toolkit';
import eventReducer from '../features/Events';

export const store = configureStore({
  reducer: {
    events: eventReducer,
  },
});
