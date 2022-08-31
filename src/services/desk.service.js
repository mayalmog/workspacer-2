import { weeks } from "../assets/data/weeks";
import {
  add,
  format,
  previousSunday,
  isSunday,
  nextSunday,
  parseISO,
} from "date-fns";
import { utilService } from "./util.service";

export const deskService = {
  getWeekByStartDate,
  getWeekStartDate,
  getCurrDay,
  bookDesk,
  getCancelledBooking,
  addNextWeek,
};

let gWeeks = [];
_createWeeks();
getNewDaysArray();

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
  //TODO: enable admin to book multiple desks
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

function addNextWeek() {
  const newWeek = {
    id: utilService.makeId(),
    startDate: getNextWeekStartDate(),
    days: getNewDaysArray(),
  };
  gWeeks.push(newWeek);
}

function getNextWeekStartDate() {
  const lastWeekStartDate = gWeeks[gWeeks.length - 1].startDate;
  const newStartDate = nextSunday(new Date(lastWeekStartDate));
  return format(newStartDate, "yyyy-MM-dd");
}

function getNewDaysArray() {
  let days = [];
  const startDate = getNextWeekStartDate();
  for (let i = 0; i <= 5; i++) {
    const dayTemplate = {
      dayName: getDayNameByIdx(i),
      date: getDayDateByIdx(i, startDate),
      desks: [
        {
          id: "1",
          user: null,
        },
        {
          id: "2",
          user: null,
        },
        {
          id: "3",
          user: null,
        },
        {
          id: "4",
          user: null,
        },
        {
          id: "5",
          user: null,
        },
        {
          id: "6",
          user: null,
        },
        {
          id: "7",
          user: null,
        },
        {
          id: "8",
          user: null,
        },
      ],
    };
    days.push(dayTemplate);
  }
  return days;
}

function getDayNameByIdx(i) {
  switch (i) {
    case 0:
      return "Sunday";

    case 1:
      return "Monday";

    case 2:
      return "Tuesday";

    case 3:
      return "Wednesday";

    case 4:
      return "Thursday";

    case 5:
      return "Friday";
  }
}

function getDayDateByIdx(i, startDate) {
  return format(add(new Date(startDate), { days: i }), "yyyy-MM-dd");
}
