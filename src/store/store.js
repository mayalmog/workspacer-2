import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";
import deskReducer from "./desk/deskSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    desk: deskReducer,
  },
});
