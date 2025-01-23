import { createSlice } from '@reduxjs/toolkit';

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('cart');
    if (serializedState === null) {
      return { items: [] };
    }
    return JSON.parse(serializedState);
  } catch (e) {
    console.warn("Could not load state", e);
    return { items: [] };
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('cart', serializedState);
  } catch (e) {
    console.warn("Could not save state", e);
  }
};

const initialState = loadState();

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    itemsAdded(state, action) {
      const existingProduct = state.items.find(item => item.id === action.payload.id);
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      saveState(state); // Save state to local storage
    },
    itemRemoved(state, action) {
      const existingProduct = state.items.find(item => item.id === action.payload.id);
      if (existingProduct) {
        if (existingProduct.quantity > 1) {
          existingProduct.quantity -= 1;
        } else {
          state.items = state.items.filter(item => item.id !== action.payload.id);
        }
      }
      saveState(state); // Save state to local storage
    },
    itemDeleted(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload);
      saveState(state); // Save state to local storage
    }
  },
});

export const { itemsAdded, itemRemoved, itemDeleted } = cartSlice.actions;

export default cartSlice.reducer;
