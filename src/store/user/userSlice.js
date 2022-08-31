import { createSlice } from "@reduxjs/toolkit";
import { userService } from "../../services/user.service";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
    loggedinUser: userService.getLoggedinUser() || null,
  },
  reducers: {
    setUsers: (state) => {
      state.users = userService.query();
    },
    setLoggedinUser: (state, action) => {
      state.loggedinUser = action.payload;
      userService.saveLoggedinUser(action.payload);
    },
    logoutUser: (state) => {
      state.loggedinUser = null;
    },
  },
});

export const { setUsers, setLoggedinUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
