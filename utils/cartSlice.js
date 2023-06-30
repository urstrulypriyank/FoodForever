import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, actions) => {
      state.items.push(actions.payload);
    },
    removeItem: (state, uuid_product) => {
      state.items = state.items.filter((item) => item.id !== uuid_product);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
