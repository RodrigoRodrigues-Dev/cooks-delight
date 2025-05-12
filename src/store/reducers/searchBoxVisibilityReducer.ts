import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const searchBoxVisibilitySlice = createSlice({
  name: 'searchBoxVisibility',
  initialState: { isVisible: false },
  reducers: {
    setSearchBoxVisibility(state, action: PayloadAction<boolean>) {
      state.isVisible = action.payload;
    }
  }
});

export const { setSearchBoxVisibility } = searchBoxVisibilitySlice.actions;

export const searchBoxVisibilityReducer = searchBoxVisibilitySlice.reducer;
