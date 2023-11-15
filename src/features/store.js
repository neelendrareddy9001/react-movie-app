import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./Movies/movieSlice";

export const Store = configureStore({
  reducer: { movieReducer },
});
