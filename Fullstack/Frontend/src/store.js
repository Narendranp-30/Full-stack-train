import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './reducers/counterSlice'
import cartSlice from '../src/reducers/CartSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart:cartSlice
  },
})
