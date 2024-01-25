import { configureStore } from "@reduxjs/toolkit";
import  counterSlice  from "./CounterSlice";
import  Case03CartSlice  from "./Case03Slice" ;
export const store = configureStore({
  reducer: {
    counter: counterSlice,
    case03: Case03CartSlice,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
