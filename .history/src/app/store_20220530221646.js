import { configureStore } from '@reduxjs/toolkit';
import userReducer from "./userSlice";  // userSlice.js 에서 export default userSlice.reducer; 임포트한 것

// import counterReducer from '../features/counter/counterSlice';

// export const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//   },
// });

export default configureStore({
  reducer: {
    user: userReducer,
  }
})