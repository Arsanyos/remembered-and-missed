// store.js
import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "@/app/login/redux/login.slice";
const store = configureStore({
  reducer: {
    auth: loginReducer,
  },
});

export default store;
