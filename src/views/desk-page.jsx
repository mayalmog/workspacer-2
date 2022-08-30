import { useSelector } from "react-redux";

export const DeskPage = () => {
  const loggedinUser = useSelector((state) => state.user.loggedinUser);

  //TODO: create desk store
  const days = ["Sunday", "Monday", "Tuesday"];
  return (
    <section className="desk-page">
      <h3>Desk Page</h3>
      <pre>{JSON.stringify(loggedinUser, null, 2)}</pre>

      <div>
        {days.map((day, idx) => (
          <button key={idx}>{days[idx]}</button>
        ))}
      </div>
    </section>
  );
};
