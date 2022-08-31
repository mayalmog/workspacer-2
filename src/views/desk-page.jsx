import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setWeek } from "../store/desk/deskSlice";
import { deskService } from "../services/desk.service";
import { DeskList } from "../cmps/desk/desk-list";

export const DeskPage = () => {
  const loggedinUser = useSelector((state) => state.user.loggedinUser);
  const week = useSelector((state) => state.desk.week);
  const [currDayName, setCurrDayName] = useState("Sunday");
  const currDay = deskService.getCurrDay(week, currDayName);
  const dispatch = useDispatch();

  useEffect(() => {
    const weekStartDate = deskService.getWeekStartDate();
    dispatch(setWeek(weekStartDate));
  }, [dispatch]);

  const onSetCurrDay = (dayName) => {
    setCurrDayName(dayName);
  };

  const onAddNextWeek = () => {
    deskService.addNextWeek();
  };

  return (
    <section className="desk-page">
      {loggedinUser.email === "admin@fireblocks.com" && (
        <button className="btn btn-light" onClick={onAddNextWeek}>
          Add new week
        </button>
      )}
      <div>
        {Object.keys(week).length &&
          week.days.map((day, idx) => (
            <button
              className="btn btn-light"
              key={`day-${idx}`}
              onClick={() => onSetCurrDay(day.dayName)}
            >
              {day.dayName}
            </button>
          ))}
      </div>
      <DeskList currDay={currDay} />
    </section>
  );
};
