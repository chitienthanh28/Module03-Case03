import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface StyleBook {
  id: number;
  name: string;
  thumbnail: string;
  description: string;
  imgSrc: string;
  expiredAt: string;
  author: string;
}

const initialState: StyleBook[] = [];

export const Case03CartSlice = createSlice({
  name: "BookCart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<any>) => {
      const product = action.payload;
      console.log(state)
      state.push(product);
      return state;
    },
  },
});

export const { addToCart } = Case03CartSlice.actions;

export default Case03CartSlice.reducer;