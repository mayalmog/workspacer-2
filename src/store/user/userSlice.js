import { createSlice } from "@reduxjs/toolkit";
import { userService } from "../../services/user.service";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
    loggedinUser: null,
  },
  reducers: {
    setUsers: (state) => {
      state.users = userService.query();
    },
    setLoggedinUser: (state, action) => {
      state.loggedinUser = action.payload;
    },
  },
});

export const { setUsers, setLoggedinUser } = userSlice.actions;

export default userSlice.reducer;
