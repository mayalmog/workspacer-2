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
    bookDesk: (state, action) => {
      const updatedWeek = deskService.bookDesk(
        state.week,
        action.payload.currDay,
        action.payload.updatedDesk
      );
      state.week = updatedWeek;
    },
    cancelBooking: (state, action) => {
      const updatedWeek = deskService.getCancelledBooking(
        state.week,
        action.payload.currDay,
        action.payload.desk
      );
      state.week = updatedWeek;
    },
  },
});

export const { setWeek, bookDesk, cancelBooking } = deskSlice.actions;

export default deskSlice.reducer;
