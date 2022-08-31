import { DeskPreview } from "./desk-preview";

export const DeskList = ({ currDay }) => {
  return (
    <section className="desk-list flex column justify-center align-center">
      {Object.keys(currDay).length && (
        <div className="desk-previews grid flex-wrap">
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
