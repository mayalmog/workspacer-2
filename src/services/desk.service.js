import { weeks } from "../assets/data/weeks";

export const deskService = {
  getWeekByStartDate,
};

let gWeeks = [];
_createWeeks();

function getWeekByStartDate(startDate) {
  return gWeeks.find((week) => week.startDate === startDate);
}

function _createWeeks() {
  gWeeks = weeks;
}
