import { Blog, BlogsState } from './../../types/index';
import { createSlice,  createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';

export const fetchBlogs = createAsyncThunk<Blog[],  ({page:number, limit:number})>(
  'todos/fetchBlogs',
  async function (ApiData) {
    try {
      const {page, limit} = ApiData;
      const response = await fetch(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=${limit}`)
      const data = await response.json();
      return data
    }
    catch {
     return null
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
      return null
    }
  }
);

const initialState:BlogsState = {
  list: [],
  fullArrayLength: [],
  limit: 8,
  page: 1,
  currentStart: 0,
  currentEnd: 0,
  show: '',
  loading: false,
  error: null,
}

const blogSlice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {
    chooseLimit: (state, action:PayloadAction<number>) => {
      state.limit = action.payload
    },
    nextPage: (state) => {
      state.list = [];
      state.page ++ 
      state.currentStart += state.limit 
      state.currentEnd += state.limit
      state.show = `${state.currentStart} - ${state.currentEnd}`
    },
    showCurrentPage: (state) => {
      state.currentEnd = state.limit;
      state.show = `0 - ${state.limit}`
    },
    changeCurrentPage: (state) => {
      state.page = 1
      state.currentEnd = state.limit;
      state.currentStart = 0
      state.show = `0 - ${state.limit}`
    },
    prevPage: (state) => {
      if(state.page > 1) {
       state.list = [];
       state.page --
       state.currentStart -= state.limit 
       state.currentEnd -= state.limit
       state.show = `${state.currentStart} - ${state.currentEnd}`
      }
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


export const { chooseLimit, showCurrentPage,  changeCurrentPage, nextPage, prevPage } = blogSlice.actions
export default blogSlice.reducer;
