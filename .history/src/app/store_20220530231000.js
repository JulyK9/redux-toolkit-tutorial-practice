import { configureStore } from '@reduxjs/toolkit';
import userReducer from "../redux/userSlice";  // userSlice.js 에서 export default userSlice.reducer; 임포트한 것

export default configureStore({
  reducer: {
    user: userReducer,
  },
});