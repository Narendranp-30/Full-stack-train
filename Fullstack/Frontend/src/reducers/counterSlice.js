import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name:"counter",
  initialState:{
    count:0
  },
  reducers:{
    increment:(state)=>{
      state.count+=1
    },
    decrement:(state)=>{
      if(state.count<=0){
        state.count=0
      }
      else{
        state.count-=1
      }
    },
    incrementByValue:(state,action)=>{
      state.count+=action.payload
      if(state.count<0){
        state.count=0
      }
    }
  }
})

export const {increment,decrement,incrementByValue} = counterSlice.actions
export default counterSlice.reducer