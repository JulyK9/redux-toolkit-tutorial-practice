import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "John",
    email: "John@gmail.com"
  },
  reducers: {
    update: (state, action) => {
      
    }
  }
})