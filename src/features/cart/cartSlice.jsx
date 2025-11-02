import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [
    {
      id: 10,
      name: "Pizza",
      unitPrice: 12,
      quantity: 5,
      totalPrice: 60,
    },
  ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      // payload = new item
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      // payload = id
      state.cart = state.cart.filter((item) => item !== action.payload);
    },
    addQuantity(state, action) {
      // payload = id
      const item = state.cart.find((item) => item.id === action.payload);
      item.totalQuantity++;
      item.totalPrice = item.totalQuantity * item.unitPrice;
    },
    removeQuantity(state, action) {
      // payload = id
      const item = state.cart.find((item) => item.id === action.payload);
      item.totalQuantity--;
      item.totalPrice = item.totalQuantity * item.unitPrice;
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});
export const { addItem, addQuantity, removeQuantity, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;

export const getTotalPizzaQunaity = (state) =>
  state.cart.cart.reduce((sum, curr) => (sum += curr.quantity), 0);

export const getTotalPizzaPrice = (state) =>
  state.cart.cart.reduce((sum, curr) => (sum += curr.totalPrice), 0);
