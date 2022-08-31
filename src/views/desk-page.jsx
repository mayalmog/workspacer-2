import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setWeek } from "../store/desk/deskSlice";
import { deskService } from "../services/desk.service";
import { DeskList } from "../cmps/desk/desk-list";

export const DeskPage = () => {
  // const loggedinUser = useSelector((state) => state.user.loggedinUser);
  const week = useSelector((state) => state.desk.week);
  const [currDayName, setCurrDayName] = useState("Sunday");
  const currDay = deskService.getCurrDay(week, currDayName);
  // const currDay = week.days.find((day) => day.dayName === currDayName);
  const dispatch = useDispatch();

  useEffect(() => {
    const weekStartDate = deskService.getWeekStartDate();
    dispatch(setWeek(weekStartDate));
  }, [dispatch]);

  const onSetCurrDay = (dayName) => {
    setCurrDayName(dayName);
  };
  return (
    <section className="desk-page">
      <h3>Desk Page</h3>
      {/* <pre>{JSON.stringify(week, null, 2)}</pre> */}
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
