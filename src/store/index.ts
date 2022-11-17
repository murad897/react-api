import { configureStore } from '@reduxjs/toolkit';
import blogReducer from '../slices/blogSlice';

const store = configureStore({
  reducer: {
    blogs: blogReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
