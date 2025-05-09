import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const categorySlice = createSlice({
  name: 'category',
  initialState: 'All' as string,
  reducers: {
    setCategory: (_state, action: PayloadAction<string>) => {
      return action.payload;
    }
  }
});

export const { setCategory } = categorySlice.actions;
export const categoryReducer = categorySlice.reducer;
