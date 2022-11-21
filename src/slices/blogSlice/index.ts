import { Blog, BlogsState } from './../../types/index';
import { createSlice,  createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';

export const fetchBlogs = createAsyncThunk<Blog[],  { page:number, limit:number }>(
  'todos/fetchBlogs',
  async function (ApiData) {
    try {
      const {page, limit} = ApiData;
      const response = await fetch(`https://jsonplaceholder.typicode.com/photos?_page${page}&_limit=${limit}`)
      const data = await response.json();
      return data; 
    }
    catch {
      console.log('error')
    }
  }
);

export const fetchAllBlogs = createAsyncThunk<Blog[]>(
  'todos/fetchAllBlogs',
  async function () {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/photos`)
      const data = await response.json();
      return data; 
    }
    catch {
      console.log('error')
    }
  }
);

const initialState:BlogsState = {
  list: [],
  fullArrayLength: [],
  limit: 0,
  loading: false,
  error: null,
}

const blogSlice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {
    chooseLimit: (state, action:PayloadAction<number>) => {
      state.limit = action.payload
    }
  },
  extraReducers:(builder) => {
    builder.addCase(fetchBlogs.pending, (state) => {
      state.loading = true,
      state.error = null;
    })
    builder.addCase(fetchBlogs.fulfilled, (state, action) => {
      state.list = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchAllBlogs.pending, (state) => {
      state.loading = true,
      state.error = null;
    })
    builder.addCase(fetchAllBlogs.fulfilled, (state, action) => {
      state.fullArrayLength = action.payload;
      state.loading = false;
    })
  }
});


export const { chooseLimit } = blogSlice.actions
export default blogSlice.reducer;
