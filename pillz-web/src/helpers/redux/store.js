import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../redux/slices/counter";
import userReducer from "../redux/slices/user";

export default configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
  },
});
