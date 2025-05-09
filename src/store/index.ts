import { configureStore } from '@reduxjs/toolkit';
import { categoryReducer } from './reducers/categoryReducer';

import api from '../services/api';

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    category: categoryReducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(api.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
