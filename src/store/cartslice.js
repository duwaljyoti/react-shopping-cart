import { createSlice } from "@reduxjs/toolkit";

const cartslice = createSlice({
  name: 'cart',
  initialState: {
    itemsList: [],
    totalQuantity: 0,
    showCart: false
  },
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload
      const existingItem = state.itemsList.find((item) => newItem.id === item.id);
      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      } else {
        state.itemsList.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.name
        })
      }

      state.totalQuantity++;
    },
    removeFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.itemsList.find(item => item.id)
      if (existingItem.quantity === 1) {
        state.itemsList = state.itemsList.filter(item => item.id !== id)
      } else {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price
      }
    },
    setShowCart(state) {
      state.showCart = !state.showCart;
    }
  }
})

export const cartActions = cartslice.actions;

export default cartslice;
