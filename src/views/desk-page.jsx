export const DeskPage = () => {
  //TODO: get data from store
  const days = ["Sunday", "Monday", "Tuesday"];
  return (
    <section className="desk-page">
      <h3>Desk Page</h3>
      <div>
        {days.map((day, idx) => (
          <button>{days[idx]}</button>
        ))}
      </div>
    </section>
  );
};
