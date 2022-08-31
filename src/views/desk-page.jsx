import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setWeeks, setWeek } from "../store/desk/deskSlice";
import { deskService } from "../services/desk.service";
import { DeskList } from "../cmps/desk/desk-list";

export const DeskPage = () => {
  const loggedinUser = useSelector((state) => state.user.loggedinUser);
  const weeks = useSelector((state) => state.desk.weeks);
  const week = useSelector((state) => state.desk.week);
  const [currDayName, setCurrDayName] = useState("Sunday");
  const currDay = deskService.getCurrDay(week, currDayName);
  const dispatch = useDispatch();

  const onSetCurrDay = (dayName) => {
    setCurrDayName(dayName);
  };

  const onAddNextWeek = () => {
    deskService.addNextWeek();
    dispatch(setWeeks());
  };

  const handleChange = ({ target }) => {
    const { value } = target;
    dispatch(setWeeks());
    dispatch(setWeek(value));
  };

  return (
    <section className="desk-page flex column justify-center align-center">
      <div>
        <form className="flex  justify-center align-center">
          <p htmlFor="weeks">Choose week by start date:</p>
          <select name="weeks" id="weeks" onChange={handleChange}>
            <option value="default">Choose week:</option>
            {weeks.map((week) => {
              return (
                <option value={week.startDate} key={week.id}>
                  {week.startDate}
                </option>
              );
            })}
          </select>
        </form>
        {loggedinUser.email === "admin@fireblocks.com" && (
          <button className="btn btn-light" onClick={onAddNextWeek}>
            Add new week
          </button>
        )}
      </div>
      <div className="weekday-btns flex justify-center align-center">
        {Object.keys(week).length &&
          week.days.map((day, idx) => (
            <button
              className={`${
                day.dayName === currDayName ? "currDay" : ""
              } btn btn-light`}
              key={`day-${idx}`}
              onClick={() => onSetCurrDay(day.dayName)}
            >
              {day.dayName}
            </button>
          ))}
      </div>
      <p>{currDay.date}</p>
      <DeskList currDay={currDay} />
    </section>
  );
};
