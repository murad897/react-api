import { Blog, BlogsState } from './../../types/index';
import { createSlice,  createAsyncThunk} from '@reduxjs/toolkit';

export const fetchBlogs = createAsyncThunk<Blog[], undefined, {rejectValue: string}>(
  'todos/fetchBlogs',
  async function (_, { rejectWithValue }) {
      const response = await fetch('https://jsonplaceholder.typicode.com/photos?_page=1&_limit=10')
      if(!response.ok) {
        return rejectWithValue('server error');
      }
      const data = await response.json();
      return data; 
  }
);

const initialState:BlogsState = {
  list: [],
  loading: false,
  error: null,
}

const blogSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
  },
  extraReducers:(builder) => {
    builder
    .addCase(fetchBlogs.pending, (state) => {
      state.loading = true,
      state.error = null;
    })
    .addCase(fetchBlogs.fulfilled, (state, action) => {
      state.list = action.payload;
      state.loading = false;
    })
  }
});

export default blogSlice.reducer;
