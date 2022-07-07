import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  quantity: 0,
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
    reduceProduct: (state, action) => {
      const product = state.products.find(
        (p, index) => index === action.payload
      );
      console.log(product);
      product.quantity === 1
        ? state.products.splice(action.payload, 1)
        : (product.quantity -= 1);

      state.total -= product.price;
      state.quantity = state.products.length;
    },

    reset: () => initialState,
  },
});

export const { addProduct, reduceProduct, reset } = cartSlice.actions;
export default cartSlice.reducer;
