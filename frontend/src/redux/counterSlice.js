import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    counter: 0,
  },
  reducers: {
    increaseCounter: (state, action) => {
      state.counter++
    },
    decreaseCounter: (state, action) => {
      state.counter--
    },   
  },
})
export default counterSlice.reducer;

export const {
  increaseCounter,
  decreaseCounter,
} = counterSlice.actions