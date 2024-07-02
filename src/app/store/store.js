import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slice/slice";
import dropdownReducer from "./slice/dropdown";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    dropdown: dropdownReducer,
  },
});
