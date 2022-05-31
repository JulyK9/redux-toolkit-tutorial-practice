import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "keson",
    email: "keson@gmail.com",
  },
  reducers: {
    update: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
    remove: (state) => (state = {}),
    addHello: (state, action) => {
      state.name = "Hello " + action.payload.name;
    }
  }
});

// 설정한 액션을 다른 컴포넌트에서 쓸 수 있도록 export
export const { update, remove, addHello } = userSlice.actions;

// store.js 에서 등록하고나서 쓸 수 있도록 export
export default userSlice.reducer;
