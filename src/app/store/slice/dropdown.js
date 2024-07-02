import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "По новизне",
};

export const dropdownSlice = createSlice({
  name: "dropdown",
  initialState,
  reducers: {
    DropValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { DropValue } = dropdownSlice.actions;

export default dropdownSlice.reducer;
