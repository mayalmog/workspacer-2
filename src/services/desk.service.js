import { weeks } from "../assets/data/weeks";
import { format, previousSunday, isSunday } from "date-fns";

export const deskService = {
  getWeekByStartDate,
  getWeekStartDate,
  getCurrDay,
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
