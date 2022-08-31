import { useSelector, useDispatch } from "react-redux";
import { DeskPreview } from "./desk-preview";

export const DeskList = ({ currDay }) => {
  const week = useSelector((state) => state.desk.week);

  return (
    <section className="desk-list">
      <p>Desk-list</p>
      {/* <pre>{JSON.stringify(currDay.desks, null, 2)}</pre> */}
      {Object.keys(currDay).length && (
        <div className="desk-previews flex flex-wrap">
          {currDay.desks.map((desk, idx) => {
            return (
              <DeskPreview
                desk={desk}
                currDay={currDay}
                key={`desk-preview-${desk.id}`}
              />
            );
          })}
        </div>
      )}
    </section>
  );
};
