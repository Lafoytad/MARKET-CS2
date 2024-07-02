import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
  numb: -1,
  visible: false,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    valueBuy: (state, action) => {
      const newItem = {
        // id: state.value.length + 1,
        type: action.payload.thing || "",
        type: action.payload.type || "",
        name: action.payload.name || "",
        price: action.payload.discount
          ? (
              action.payload.price -
              action.payload.price * (action.payload.discount / 100)
            ).toFixed(2)
          : action.payload.price,
      };
      state.value.push(newItem);
      state.numb += 1;
    },
    vis: (state) => {
      state.visible = !state.visible;
    },
  },
});

export const { valueBuy, vis } = counterSlice.actions;

export default counterSlice.reducer;
