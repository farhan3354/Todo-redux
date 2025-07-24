import { configureStore } from "@reduxjs/toolkit";
import CounterReduder from "./counter/index";

export const store = configureStore({
  reducer: {
    counter: CounterReduder,
  },
});
