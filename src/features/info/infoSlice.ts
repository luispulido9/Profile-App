import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await fetch('https://dummyjson.com/users?&limit=6');
  const { users } = await response.json();
  return users;
});

const initialState = {
  data: [
    {
      firstName: 'John',
      lastName: 'Doe',
      birthDate: '2002-10-22',
      username: 'John Smith',
      image: '',
      address: {
        city: 'Los Angeles',
        state: 'California',
        address: '123 Main Street',
      },
      id: '',
      age: '',
      phone: '',
    },
  ],
  status: 'idle',
};

const infoSlice = createSlice({
  name: 'info',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export default infoSlice.reducer;
