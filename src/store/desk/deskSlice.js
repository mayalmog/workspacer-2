import { createSlice } from "@reduxjs/toolkit";
import { deskService } from "../../services/desk.service";

export const deskSlice = createSlice({
  name: "desk",
  initialState: {
    week: {},
  },
  reducers: {
    setWeek: (state, action) => {
      state.week = deskService.getWeekByStartDate(action.payload);
    },
  },
});

export const { setWeek } = deskSlice.actions;

export default deskSlice.reducer;
