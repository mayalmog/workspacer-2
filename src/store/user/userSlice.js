import { createSlice } from "@reduxjs/toolkit";
import { userService } from "../../services/user.service";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
  },
  reducers: {
    setUsers: (state) => {
      state.users = userService.query();
    },
  },
});

export const { setUsers } = userSlice.actions;

export default userSlice.reducer;
