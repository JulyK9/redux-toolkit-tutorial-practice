import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "john",
    email: "john@gmail.com",
  },
  reducers: {
    update: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
  }
});

// 설정한 액션을 update 에서 쓸 수 있도록 export
export const { update } = userSlice.actions;

// store.js 에서 쓸수 있도록 export
export default userSlice.reducer;
