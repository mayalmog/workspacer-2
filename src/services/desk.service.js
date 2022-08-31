import { weeks } from "../assets/data/weeks";
import { format, previousSunday, isSunday } from "date-fns";

export const deskService = {
  getWeekByStartDate,
  getWeekStartDate,
  getCurrDay,
  bookDesk,
  getCancelledBooking,
};

let gWeeks = [];
_createWeeks();

function getWeekByStartDate(startDate) {
  return gWeeks.find((week) => week.startDate === startDate);
}

function _createWeeks() {
  gWeeks = weeks;
}

function getWeekStartDate() {
  const today = new Date();
  if (isSunday(today)) {
    return format(today, "yyyy-MM-dd");
  } else {
    return format(previousSunday(today), "yyyy-MM-dd");
  }
}

function getCurrDay(week, currDayName) {
  if (Object.keys(week).length)
    return week.days.find((day) => day.dayName === currDayName);
  return {};
}

function bookDesk(week, currDay, updatedDesk) {
  let updatedWeek = JSON.parse(JSON.stringify(week));
  updatedWeek.days.forEach((day, dayIdx) => {
    if (day.dayName === currDay.dayName) {
      day.desks.forEach((desk, deskIdx) => {
        if (desk.id === updatedDesk.id) {
          updatedWeek.days[dayIdx].desks[deskIdx].user = updatedDesk.user;
        }
      });
    }
  });
  return updatedWeek;
}
function getCancelledBooking(week, currDay, updatedDesk) {
  let updatedWeek = JSON.parse(JSON.stringify(week));
  updatedWeek.days.forEach((day, dayIdx) => {
    if (day.dayName === currDay.dayName) {
      day.desks.forEach((desk, deskIdx) => {
        if (desk.id === updatedDesk.id) {
          updatedWeek.days[dayIdx].desks[deskIdx].user = null;
        }
      });
    }
  });
  return updatedWeek;
}
